import { readFile } from "node:fs/promises";
import path from "node:path";

const resumeFileName = "Nguyen_Van_Tien_Phat_Resume.pdf";

export async function GET() {
  const resumePath = path.join(process.cwd(), "public", resumeFileName);
  const resume = await readFile(resumePath);

  return new Response(resume, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resumeFileName}"`,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
