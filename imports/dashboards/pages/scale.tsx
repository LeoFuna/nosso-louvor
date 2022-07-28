import AppLayout from '../../core/layouts/AppLayout';
import ScalePanel from '../components/ScalePanel';

function DashboardScale() {
  return(
    <AppLayout disableHamburguer title='Escalas'>
      <ScalePanel />
    </AppLayout>
  );
}

export default DashboardScale;
