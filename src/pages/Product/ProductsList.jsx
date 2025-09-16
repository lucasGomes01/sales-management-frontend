import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";

export default function ProductsList() {
    const [products, setProducts] = useState([
        { id: 1, name: "Product A", price: 100 },
        { id: 2, name: "Product B", price: 200 },
    ]);

    const [open, setOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: "", price: "" });

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", flex: 1 },
        { field: "price", headerName: "Price ($)", width: 150 },
    ];

    const handleAdd = () => {
        if (!newProduct.name || newProduct.price === "") return;

        const productToAdd = {
            id: Date.now(),
            name: newProduct.name,
            price: parseFloat(newProduct.price),
        };
        setProducts((prev) => [...prev, productToAdd]);
        setNewProduct({ name: "", price: "" });
        setOpen(false);
    };

    return (
        <div style={{ width: "100%" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                }}
            >
                <h2 style={{ margin: 0 }}>List products</h2>
                <Button variant="contained" onClick={() => setOpen(true)}>
                    New Product
                </Button>
            </div>

            {/* Grid */}
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact
                    rowData={products}
                    columnDefs={columns}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        resizable: true,
                    }}
                    pagination={true}
                    paginationPageSize={20}
                />
            </div>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Product</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="dense"
                        value={newProduct.name}
                        onChange={(e) =>
                            setNewProduct((s) => ({ ...s, name: e.target.value }))
                        }
                    />
                    <TextField
                        label="Price ($)"
                        type="number"
                        fullWidth
                        margin="dense"
                        value={newProduct.price}
                        onChange={(e) =>
                            setNewProduct((s) => ({ ...s, price: e.target.value }))
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleAdd} variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
