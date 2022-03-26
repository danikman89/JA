import { TableRow } from './TableRow';

export function Table({ tracks }) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className="song">SONG</th>
          <th>ARTIST</th>
          <th>PLAYCOUNT</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TableRow tracks={tracks} />
      </tbody>
    </table>
  );
}
