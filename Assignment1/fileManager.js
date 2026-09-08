const fs = require("fs");

const fileName = "data.txt";

console.log("Starting file operations...");


fs.writeFile(fileName, "Hello! This is my Smart Utility Toolkit.", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully.");

    
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File content:", data);

        
        fs.appendFile(fileName, "\nThis is updated content.", (err) => {

            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully.");

            
            fs.readFile(fileName, "utf8", (err, updatedData) => {

                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("Updated content:", updatedData);

                
                fs.unlink(fileName, (err) => {

                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully.");
                });
            });
        });
    });
});