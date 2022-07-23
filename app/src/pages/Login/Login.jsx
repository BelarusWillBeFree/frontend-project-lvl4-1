import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Row, Col, Container, Card, Image, Anchor,
} from 'react-bootstrap';

import Form from './components/Form';

import helloImg from '../../assets/img/hello.jpeg';
import { useAuth } from '../../hooks';
import { routes } from '../../routes';

export const Login = () => {
  const auth = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { homePage, loginPath, signupPage } = routes;

  // check authorize
  useEffect(() => {
    if (auth.loggedIn) {
      navigate(homePage());
    }
  }, []);

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12" md={8} xxl={6}>
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <Col className="col-12 d-flex align-items-center justify-content-center" md={6}>
                <Image className="rounded-circle" src={helloImg} alt="Enter" />
              </Col>
              <Form
                auth={auth}
                loginPath={loginPath()}
                navigate={navigate}
                redirectPath={homePage()}
              />
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span className="px-1">{ t('login.newToChat') }</span>
                <Anchor href={signupPage()}>
                  { t('login.signup') }
                  ›
                </Anchor>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};