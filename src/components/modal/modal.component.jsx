import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import FormInput from "../Form/form.component"

const MyModal = props => {
  return (
    <Modal
      {...props}
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ height: "90vh", background: "transparent" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>submit data to head office</h4>
        <p>
          once you sumit this form the data will be sent to heade quarter to be
          verifide and counted as a region and you will be automatically signd
          out! if you have any comment or there was any problem please provide
          to the form bellow
        </p>
      </Modal.Body>
      <form
        onSubmit={() => {
          props.history.push("/")
        }}
      >
        <FormInput name="complient" lable="Complient" required />
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  )
}
export default MyModal
