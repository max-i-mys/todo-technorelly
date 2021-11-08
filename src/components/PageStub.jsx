import { Row, Col } from 'react-bootstrap'

export default function PageStub() {
	return (
		<>
			<Row>
				<Col>
					<div className="error-template">
						<h1>Oops!</h1>
						<h2>404 Not Found</h2>
						<div className="error-details">Sorry, an error has occurred, Requested page not found!</div>
					</div>
				</Col>
			</Row>
		</>
	)
}
