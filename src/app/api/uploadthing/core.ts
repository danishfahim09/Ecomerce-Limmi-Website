import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();
const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
  bannerImageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth(req);
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url,metadata);
      return { uploadedBy: "danish" };
    }),

   ProductImageUploader: f({ image: { maxFileSize: "1MB" } })
   .onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.url,metadata);
    return { uploadedBy: "danish" };
  }),
  TrainingImageUploader: f({ image: { maxFileSize: "1MB" } })
   .onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.url,metadata);
    return { uploadedBy: "danish" };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;



