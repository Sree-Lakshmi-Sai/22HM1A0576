import React, { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText, Box, Divider, Collapse, Button } from "@mui/material";
import { getStatistics } from "../utils/api";

function UrlStatistics() {
  const [stats, setStats] = useState([]);
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getStatistics();
      setStats(data);
    }
    fetchData();
  }, []);

  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h6" gutterBottom>Statistics</Typography>
      {stats.length === 0 ? (
        <Typography>No data available.</Typography>
      ) : (
        <List>
          {stats.map((item, idx) => (
            <React.Fragment key={idx}>
              <ListItem alignItems="flex-start" sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <ListItemText
                  primary={
                    <>
                      <Typography><strong>Short URL:</strong> {item.shortUrl}</Typography>
                      <Typography><strong>Original URL:</strong> {item.originalUrl}</Typography>
                      <Typography><strong>Created:</strong> {item.createdAt}</Typography>
                      <Typography><strong>Expires:</strong> {item.expiry || "—"}</Typography>
                      <Typography><strong>Clicks:</strong> {item.clicks}</Typography>
                    </>
                  }
                />
                <Button size="small" onClick={() => setOpenIdx(idx === openIdx ? null : idx)}>
                  {openIdx === idx ? 'Hide Details' : 'Click Details'}
                </Button>
                <Collapse in={openIdx === idx}>
                  <Box sx={{ ml: 2, mt: 1 }}>
                    {item.clickDetails && item.clickDetails.length ? (
                      item.clickDetails.map((cd, i) => (
                        <Typography variant="body2" key={i}>
                          Time: {cd.timestamp} | Source: {cd.source} | Location: {cd.location}
                        </Typography>
                      ))
                    ) : (
                      <Typography variant="body2">No click details.</Typography>
                    )}
                  </Box>
                </Collapse>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default UrlStatistics;