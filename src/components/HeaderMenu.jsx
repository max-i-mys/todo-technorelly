import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function HeaderMenu() {
	return (
		<>
			<Row>
				<Col className="mb-3">
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/">
								Todos
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/add">
								Add todo
							</NavLink>
						</li>
					</ul>
				</Col>
			</Row>
		</>
	)
}
