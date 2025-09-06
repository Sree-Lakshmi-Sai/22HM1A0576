import React, { useState } from "react";
import { Box, Button, TextField, Paper, Typography, Alert } from "@mui/material";
import { shortenUrl } from "../utils/api";
import { validateUrl, validateValidity } from "../utils/validator";

function UrlShortener() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateUrl(url)) { setError("Invalid URL format"); setSuccess(""); return; }
    if (validity && !validateValidity(validity)) { setError("Enter positive number"); setSuccess(""); return; }
    setError("");
    try {
      await shortenUrl(url, validity);
      setSuccess("URL shortened!");
      setUrl("");
      setValidity("");
    } catch {
      setError("Error. Try again.");
      setSuccess("");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>URL Shortener</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Enter original URL" value={url} onChange={e => setUrl(e.target.value)} required size="small" variant="outlined" />
        <TextField label="Validity (minutes, optional)" value={validity} onChange={e => setValidity(e.target.value)} size="small" variant="outlined" />
        <Button variant="contained" type="submit">Shorten URL</Button>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Box>
    </Paper>
  );
}

export default UrlShortener;