import { Button, Paper, Zoom } from "@material-ui/core";
import PaperPage from "../../components/presentationals/PaperPage";
import { connect } from "react-redux";
import { mapLanguageToProps } from "../../redux/mapState";
import { setLanguage } from "../../redux/actions";
import { useState } from "react";

function SettingsPage(props) {
  const [anim, setAnim] = useState(false);

  return (
    <Paper>
      <Button
        onClick={() => {
          props.setLanguage("ar");
          setAnim(!anim);
        }}
        variant="outlined"
      >
        {props.language}
      </Button>
        <Paper elevation={4}>
          <svg>
            <polygon points="0,100 50,00, 100,100" />
          </svg>
        </Paper>
    </Paper>
  );
}

export default connect(mapLanguageToProps, { setLanguage })(SettingsPage);
