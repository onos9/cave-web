import { Col, Container, Row } from "@themesberg/react-bootstrap";
import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader";

export default () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [code, setCode] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    let data = {};
    const payload = JSON.parse(decodeURI(id));
    var htmlDoc = new DOMParser().parseFromString(
      payload.html.replaceAll("+", " "),
      "text/html"
    );
    let rows = htmlDoc.getElementsByTagName("tr");
    Array.from(rows).map((row) => {
      if (row.cells.length == 2) {
        const field = row.cells[0].innerText.replaceAll(" ", "");
        data[field] = row.cells[1].innerText;
      }
    });
    // data.TransactionNarration = "10-479377";
    data.redirect_uri = payload.redirect_uri;

    postPaymentData(data);
  }, [id]);

  const postPaymentData = (data) => {
    axios
      .post("/webhook/mail", data)
      .then((res) => {
        console.log(res?.data);
        if (res.data.success) setLoaded(true);
      })
      .catch((err) => {
        const payload = err.response ? err.response?.data : "COULD NOT CONNECT";
        console.log(payload);
        setError(payload.error);
        setLoaded(true);
      });
  };

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <section className="section section-sm pt-" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Payment</h2>
              {!!error ? (
                <>
                  <p className="lead px-lg-8">
                    Unable to process the payment. Server responded with the
                    following message:
                  </p>
                  <p className="text-danger px-lg-8">{error}</p>
                  <p className="lead px-lg-8">
                    Please confirm that this transaction is for Application fee and applicant has
                    included a valid payment code in the transaction naration.
                  </p>
                </>
              ) : (
                <p className="lead px-lg-8">
                  The Payment has been submited successfully is being processed.
                  An email notification will be sent to the applicant{" "}
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
