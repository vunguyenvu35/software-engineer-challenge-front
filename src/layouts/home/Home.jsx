import React from "react"
import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import fileDownload from "js-file-download"
const Home = () => {
  const [url, setUrl] = useState("")
  const [isLoading, setLoading] = useState(false)
  const baseAPI = "http://localhost:3000/"
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setLoading(true)
      const baseURL = baseAPI + "/crawler/scan?url=" + url
      // make axios post request
      const response = await axios({
        method: "GET",
        url: baseURL,
        responseType: "blob"
      })
      fileDownload(response.data, "image.png")
      setLoading(false)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  return (
    <>
      <div className="row p-5">
        <div className="row-cols-3 d-flex justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>URL address</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter URL"
                onChange={e => setUrl(e.target.value)}
              />
              <Form.Text className="text-muted">
                Pls! Enter the Page URL which you want to crawler table.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" disabled={isLoading} type="submit">
              {isLoading ? "Submitting…" : "Submit"}
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
export default Home
