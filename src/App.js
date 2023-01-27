import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import imageurl from './images/14736.jpg'

const rowData = [
  {
    id: "1000",
    farmer: "Pricha Pongchandaj",
    documentURL: "./images/14736.jpg",
    status: "Created",
    created: "21/10/2022",
    official: "-",
    closed: "-"
  },
  {
    id: "1001",
    farmer: "Chatalerm Srisati",
    documentURL: "./images/31235.jpg",
    status: "Created",
    created: "06/12/2022",
    official: "-",
    closed: "-"
  },
  {
    id: "1002",
    farmer: "Thahan Wisetkaew",
    documentURL: "./images/31236.jpg",
    status: "Official",
    created: "21/12/2022",
    official: "23/12/2022",
    closed: "-"
  },
  {
    id: "1003",
    farmer: "Tadthon Samak",
    documentURL: "./images/179157.jpg",
    status: "Official",
    created: "03/01/2023",
    official: "04/01/2023",
    closed: "-"
  },
  {
    id: "1004",
    farmer: "Boonpipob Souvanatong",
    documentURL: "./images/640039.jpg",
    status: "Official",
    created: "04/01/2023",
    official: "06/01/2023",
    closed: "-"
  },
  {
    id: "1005",
    farmer: "Yongchaiyudh Pongsanam",
    documentURL: "./images/969650.jpg",
    status: "Official",
    created: "10/01/2023",
    official: "13/01/2023",
    closed: "-"
  },
  {
    id: "1006",
    farmer: "Thitisan Sindudeja",
    documentURL: "./images/31236.jpg",
    status: "Closed",
    created: "10/12/2022",
    official: "13/12/2022",
    closed: "15/01/2023"
  },
  {
    id: "1007",
    farmer: "Prasopchai Mookjai",
    documentURL: "./images/179157.jpg",
    status: "Closed",
    created: "12/10/2022",
    official: "14/11/2022",
    closed: "17/01/2023"
  },
  {
    id: "1008",
    farmer: "Pramon Yoonim",
    documentURL: "./images/640039.jpg",
    status: "Closed",
    created: "15/12/2022",
    official: "16/12/2022",
    closed: "25/01/2023"
  },
];

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [viewData, setViewData] = useState(rowData[0])



  const handleRowClick = (e) => {
    console.log(e.data)
    setViewData(e.data)
    setDialogVisible(true)
  }

  const handleDialogHide = () => {
    setDialogVisible(false)
  }
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Karatom Onboarding Smart Contracts</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <DataTable
          className="mx-auto mt-5"
          value={rowData}
          rowHover
          onRowClick={handleRowClick}
          selectionMode="single"
          responsiveLayout="stack"
        >
          <Column field="id" header="ID"></Column>
          <Column field="farmer" header="Farmer"></Column>
          <Column field="documentURL" header="Document"></Column>
          <Column field="status" header="Status"></Column>
          <Column field="created" header="Created"></Column>
          <Column field="official" header="Official"></Column>
          <Column field="closed" header="Closed"></Column>
        </DataTable>
        <Dialog header="Onboarding Contract Details" visible={dialogVisible} onHide={handleDialogHide} style={{ width: '500px' }}>
          <img src={imageurl} alt="Image" className="w-100 mb-3"/>
          {
            <>
              <div className="d-flex flex-row justify-content-between">
                <p>Contract ID</p>
                <p>{viewData["id"]}</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Farmer Name</p>
                <p>{viewData["farmer"]}</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Document URL</p>
                <p>{viewData["documentURL"]}</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Contract Status</p>
                <p>{viewData["status"]}</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Created At</p>
                <p>{viewData["created"]}</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Official At</p>
                <p>{viewData["official"]}</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>Closed At</p>
                <p>{viewData["closed"]}</p>
              </div>
            </>
          }
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
