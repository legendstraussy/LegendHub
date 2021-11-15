import { useRecoilValue } from 'recoil';
import { characterDetailState } from 'data/characterState';
import CharacterStats from 'components/builder/characterStats';
import CharacterFinal from 'components/builder/characterFinal';
import { CHAR_DETAIL_KEYS } from 'data/constants';

const CharacterDetails = () => {
  const detail = useRecoilValue(characterDetailState);

  if (detail === CHAR_DETAIL_KEYS.FINAL) return <CharacterFinal />;
  if (detail === CHAR_DETAIL_KEYS.STATS) return <CharacterStats />;

  return (
    <div>No character details.</div>
  );
};

export default CharacterDetails;
