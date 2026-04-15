const axios = require("axios");

const checkGender = async (req, res) => {
    const { name } = req.query;

    // Validate name parameter
    if (!name || name.trim() === '') {
        return res.status(400).json({ status: "error", message: "Missing or empty name parameter" });
    }

    if (typeof name !== 'string') {
        return res.status(422).json({ status: "error", message: "name is not a string" });
    }

    const url = `https://api.genderize.io?name=${encodeURIComponent(name.trim())}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        // Check for edge cases
        if (data.gender === null || data.count === 0) {
            return res.status(200).json({ status: "error", message: "No prediction available for the provided name" });
        }

        // Process the data
        const { gender, probability, count } = data;
        const sample_size = count;
        const is_confident = probability >= 0.7 && sample_size >= 100;
        const processed_at = new Date().toISOString();

        const result = {
            status: "success",
            data: {
                name: name.trim(),
                gender,
                probability,
                sample_size,
                is_confident,
                processed_at
            }
        };

        return res.status(200).json(result);
    } catch (err) {
        if (err.response) {
            // Upstream error
            return res.status(502).json({ status: "error", message: "Upstream service error" });
        } else {
            // Server error
            return res.status(500).json({ status: "error", message: "Internal server error" });
        }
    }
}

module.exports = checkGender;