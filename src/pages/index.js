import CharacterEquipment from 'components/builder/characterEquipment';
import CharacterTabs from 'components/builder/characterTabs';
import HubLayout from 'layouts/hub';
import BuilderLayout from 'layouts/builder';

const Builder = () => (
  <HubLayout>
    <BuilderLayout
      side={<CharacterTabs />}
    >
      <CharacterEquipment />
    </BuilderLayout>
  </HubLayout>
);

export default Builder;
