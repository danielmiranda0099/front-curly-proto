'use client';

import { useRouter } from 'next/navigation';
import { Alert, Button } from '@/bootstrap';


export function Redirect() {
  const router = useRouter();

  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>¡Ups!</Alert.Heading>
        <p>
        Parece que has llegado a una página restringida. el acceso a esta sección está limitado a los administradores. Si necesitas asistencia o tienes alguna pregunta, no dudes en contactar al equipo de soporte. Estaremos encantados de ayudarte en lo que podamos.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => router.push('/auth/login')} variant="danger">
            login
          </Button>
        </div>
      </Alert>

    </>
  );
}