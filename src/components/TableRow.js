export function TableRow({ tracks }) {
  return tracks.map(track => (
    <tr key={track.rank}>
      <td>
        <img className="img" src={track.image[0]['#text']} alt="album cover" />
      </td>
      <td className="name">{track.name}</td>
      <td className="artist">{track.artist.name}</td>
      <td className="count">{track.playcount}</td>
      <td>
        <a href={track.url} target="_blank" rel="noreferrer">
          <button className="btn">LastFM</button>
        </a>
      </td>
    </tr>
  ));
}
