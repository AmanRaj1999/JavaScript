// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
function getFileExtension(filename) {
  // Split the filename into an array based on the dot (.)
  var parts = filename.split(".");
  //   console.log(parts);
  //   console.log(parts.length);

  // Check if there is at least one dot in the filename
  if (parts.length > 1) {
    // Get the last part of the array, which is the file extension
    var extension = parts[parts.length - 1];

    // Print the file extension to the console
    console.log("File extension:", extension);
  } else {
    // If there is no dot in the filename, print an error message
    console.log("Invalid filename. No file extension found.");
  }
}

// Example:
var filename = "example.txt";
getFileExtension(filename);
