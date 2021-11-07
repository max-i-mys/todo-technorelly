import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HeaderMenu() {
	return (
		<>
			<Row>
				<Col className="mb-3">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/">
								Todos
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/add">
								Add todo
							</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</>
	)
}
