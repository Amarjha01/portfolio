const resumeDownload = async (req, res) => {
    try {
        res.download('./amarjhaResume.pdf');
    } catch (error) {
        res.status(400).json({
             message: error.message || error,
             success: false,
             error: true
            });
        
    }
}

export default resumeDownload;