import React from "react";
import { baseURL, imageURL } from "../utils/api";
import Button from "./Button";
import imgg from './file.png'
export default function DocumentCard({
  text,
  doc,
  only_pdf,
  enable_delete,
  handleDelete,
  index,
  isLoading,
}) {
    console.log('index',index);
  return (
    <div className="card" style={{ height: "180",}}>
      <div className="card-content" style={{marginTop:30,paddingLeft:20}}>
       
          <img
            className="card-img-top img-fluid"
            src={imgg}
            alt="Card image cap"
            draggable={false}
            style={{
              width: 125,
              height: 125,
            }}
          />
        

        <div className="card-body">
          {/* <h4 className="card-title">{text}</h4> */}
          <div className="row">
            <Button
              className="btn btn-primary btn-min-width mr-1 mb-1"
              onClick={() => window.open(`${imageURL}${doc}`, "_blank")}
              loading={isLoading}
            >
              View
            </Button>
{enable_delete&&
              <Button
                className="btn btn-danger btn-min-width mr-1 mb-1"
                onClick={() => handleDelete(index)}
                loading={isLoading}
              >
                DELETE
              </Button>
}
              <Button
                className="btn btn-success btn-min-width mr-1 mb-1"
                onClick={() =>
                  window.open(`${baseURL}/download/${doc}`, "_blank")
                }
                loading={isLoading}
              >
                Download
              </Button>
           
          </div>
        </div>
      </div>
    </div>
  );
}
