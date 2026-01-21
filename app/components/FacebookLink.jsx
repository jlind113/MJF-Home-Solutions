import FacebookRounded from "@mui/icons-material/FacebookRounded";
import { hoverAnims } from '../Style/Animations';

export default function FacebookLink() {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=100063689374404"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookRounded
        sx={{
          color: "info.dark",
          fontSize: 40,
          cursor: "pointer",
          ...hoverAnims.facebookIcon,
        }}
      />
    </a>
  );
}
