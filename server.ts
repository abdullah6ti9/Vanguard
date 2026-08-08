import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory quote requests and contact messages log (for demo/dev review)
  const quotesStore: Array<any> = [];
  const contactStore: Array<any> = [];

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Vanguard Craftsmen API", timestamp: new Date().toISOString() });
  });

  // Quote Request Submission Endpoint
  app.post("/api/quote", (req, res) => {
    try {
      const { projectType, scopeDetails, zipCode, timeline, budgetRange, projectDescription, contactInfo } = req.body;

      if (!projectType || !zipCode || !contactInfo?.name || !contactInfo?.phone) {
        return res.status(400).json({
          success: false,
          error: "Missing required fields: projectType, zipCode, name, and phone are required.",
        });
      }

      const quoteRecord = {
        id: `QT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        submittedAt: new Date().toISOString(),
        status: "NEW_LEAD",
        projectType,
        scopeDetails,
        zipCode,
        timeline,
        budgetRange,
        projectDescription,
        contactInfo,
      };

      quotesStore.push(quoteRecord);
      console.log(" [QUOTE SUBMITTED] Lead received:", JSON.stringify(quoteRecord, null, 2));

      return res.status(200).json({
        success: true,
        message: "Quote request received successfully. A Vanguard Senior Estimator will review your details and contact you within 24 business hours.",
        quoteId: quoteRecord.id,
      });
    } catch (err: any) {
      console.error("Quote submission error:", err);
      return res.status(500).json({ success: false, error: "Internal server error processing quote." });
    }
  });

  // Direct Contact Endpoint
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;

      if (!name || !phone || !message) {
        return res.status(400).json({
          success: false,
          error: "Please provide your name, phone number, and message.",
        });
      }

      const contactRecord = {
        id: `MSG-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        name,
        email,
        phone,
        service: service || "General Inquiry",
        message,
      };

      contactStore.push(contactRecord);
      console.log(" [CONTACT SUBMITTED]:", contactRecord);

      return res.status(200).json({
        success: true,
        message: "Thank you for reaching out! A member of our customer care team will get back to you shortly.",
        messageId: contactRecord.id,
      });
    } catch (err: any) {
      console.error("Contact submission error:", err);
      return res.status(500).json({ success: false, error: "Internal server error." });
    }
  });

  // Zip Code Coverage Check Endpoint
  const SUPPORTED_ZIPS = [
    "90210", "90211", "90212", "90049", "90077", "90272", "90265",
    "91302", "91303", "91361", "91362", "90401", "90402", "90403",
    "90266", "90274", "90275", "91101", "91105", "91108", "90027", "90068"
  ];

  app.post("/api/zip-check", (req, res) => {
    const { zip } = req.body;
    if (!zip || typeof zip !== "string") {
      return res.status(400).json({ success: false, error: "Please enter a valid 5-digit zip code." });
    }

    const cleaned = zip.trim();
    const isCovered = SUPPORTED_ZIPS.includes(cleaned) || cleaned.startsWith("90") || cleaned.startsWith("91");

    return res.json({
      success: true,
      zip: cleaned,
      isCovered,
      serviceAreaName: isCovered ? "Greater Metropolitan Area & Surrounding Counties" : null,
      estimatedResponseHours: isCovered ? 24 : 48,
    });
  });

  // Vite development middleware vs Static Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(` Vanguard Construction Server running on http://localhost:${PORT}`);
  });
}

startServer();
