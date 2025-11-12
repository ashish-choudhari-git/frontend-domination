import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "D:\\web-development\\code\\exercise\\fileFilter";

let files = await fs.readdir(basepath);

for (const item of files) {
    console.log("running for", item);
    let ext = item.split(".").pop(); // extension lere 

    if (ext !== "js" && ext !== "json" && item.includes(".")) {
        const extDir = path.join(basepath, ext); //new directory ka full path banare

        if (!fsn.existsSync(extDir)) {
            fsn.mkdirSync(extDir, { recursive: true }); // new directory me files banare
        }

        // Movingggg the file to the correct directory
        await fs.rename(path.join(basepath, item), path.join(extDir, item));
    }
}
