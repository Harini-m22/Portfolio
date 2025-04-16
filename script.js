function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf"; // Make sure 'resume.pdf' exists in the same folder
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  