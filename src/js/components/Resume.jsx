import React from "react";
import { Document, Page } from 'react-pdf';

import pdfFile from '../../assets/pdfs/Resume.pdf';

import "../../css/Resume.css"

export default class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
            const { pageNumber, numPages } = this.state;
        return(
            <div className="Resume-main">


              <div>
                <Document
                  file={pdfFile}
                  onLoadSuccess={this.onDocumentLoad}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>
            </div>
        )
    }
}