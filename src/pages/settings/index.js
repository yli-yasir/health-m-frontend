import { Button } from "@material-ui/core";
import PaperPage from "../../components/presentationals/PaperPage";
import { connect } from "react-redux";
import { mapLanguageToProps } from "../../redux/mapState";
import { setLanguage } from "../../redux/actions";

function SettingsPage(props) {
  return (
    <PaperPage>
      <Button onClick={() => {props.setLanguage('ar')}} variant="outlined">
        {props.language}
      </Button>
    </PaperPage>
  );
}

export default connect(mapLanguageToProps,{setLanguage})(SettingsPage);
