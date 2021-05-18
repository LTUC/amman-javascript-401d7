import { useContext } from 'react';
import { SettingsContext } from '../context/settings';
import { ThemeContext } from '../context/theme';

export default function Content(props) {
  const siteContext = useContext(SettingsContext);
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <h2>Rendered via function Component</h2>
      <div>
        <h1>{siteContext.title}</h1>
        <div>
          <a href={`https://www.twitter.com/${siteContext.twitter}`}>
            @{siteContext.twitter}
          </a>
        </div>
      </div>
      <hr />
      <h2>Current Mode: {themeContext.mode}</h2>
    </div>
  );
}
