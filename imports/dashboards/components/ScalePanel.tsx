import { Container, Box, Button, Table, TableBody, TableRow, TableCell, TableHead } from "@mui/material";

function ScalePanel() {
  return (
    <Container>
      <Box pt={2} pb={2} style={{ display: 'flex', alignItems: 'center' }}>
        <Box style={{ width: '100px' }}>Vocal</Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>09/07</TableCell>
              <TableCell>15/07</TableCell>
              <TableCell>20/07</TableCell>
              <TableCell>29/07</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Nil</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hiohana</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Thailise</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Andreia</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Box style={{ width: '100px' }}>Instrumental</Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>09/07</TableCell>
              <TableCell>15/07</TableCell>
              <TableCell>20/07</TableCell>
              <TableCell>29/07</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Leo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lucas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vinicius</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ellen</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
}

export default ScalePanel;