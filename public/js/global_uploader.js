jQuery(document).ready(function ($) {
    var myModal = new bootstrap.Modal(document.getElementById('Global_Uploader'));

    Dropzone.options.myGreatDropzone = {// camelized version of the `id`
        paramName: "file", // The name that will be used to transfer the file
        maxFilesize: 2, // MB
        acceptedFiles: "image/*",
        dictDefaultMessage: "Click here to select, or drag files into this area to upload the file.",
        accept: function (file, done) {
            if (file.name == "justinbieber.jpg") {
                done("Naha, you don't.");
            } else {
                done();
            }
        }
    };

});