import { useSession } from 'next-auth/react';
import AppLayout from '../../core/layouts/AppLayout';
import ScalePanel from '../components/ScalePanel';

function DashboardScale() {
  const session = useSession();
  if (session.status !== 'authenticated') return (<h1>Usuário não autorizado!</h1>);
  return(
    <AppLayout disableHamburguer title='Escalas'>
      <ScalePanel />
    </AppLayout>
  );
}

export default DashboardScale;
