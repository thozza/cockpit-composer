import React from "react";
import { Button, Form, Popover, Text, TextInput } from "@patternfly/react-core";
import { OutlinedQuestionCircleIcon } from "@patternfly/react-icons";
import { FormattedMessage, defineMessages, injectIntl, intlShape } from "react-intl";
import PropTypes from "prop-types";

const ariaLabels = defineMessages({
  imageName: {
    defaultMessage: "Image name help",
  },
  bucket: {
    defaultMessage: "Storage Bucket help",
  },
  region: {
    defaultMessage: "Storage Region help",
  },
});

class GCPDestinationStep extends React.PureComponent {
  render() {
    const { formatMessage } = this.props.intl;
    const { imageName, setImageName, uploadSettings, setUploadSettings } = this.props;

    return (
      <>
        <Text className="help-block cc-c-form__required-text">
          <FormattedMessage defaultMessage="All fields are required." />
        </Text>
        <Form isHorizontal className="cc-m-wide-label">
          <div className="pf-c-form__group">
            <div className="pf-c-form__label pf-m-no-padding-top pf-l-flex pf-u-display-flex pf-m-justify-content-flex-start pf-m-nowrap">
              <label htmlFor="image-name-input" className="pf-l-flex__item">
                <span className="pf-c-form__label-text">
                  <FormattedMessage defaultMessage="Image name" />
                </span>
                <span className="pf-c-form__label-required" aria-hidden="true">
                  &#42;
                </span>
              </label>
              <Popover
                id="image-name-popover"
                bodyContent={
                  <>
                    <FormattedMessage defaultMessage="Provide a file name to be used for the image file that will be uploaded." />
                  </>
                }
                aria-label={formatMessage(ariaLabels.imageName)}
              >
                <Button variant="plain" aria-label={formatMessage(ariaLabels.imageName)}>
                  <OutlinedQuestionCircleIcon id="popover-icon" />
                </Button>
              </Popover>
            </div>
            <TextInput
              className="pf-c-form-control"
              value={imageName}
              type="text"
              id="image-name-input"
              onChange={setImageName}
            />
          </div>
          <div className="pf-c-form__group">
            <div className="pf-c-form__label pf-m-no-padding-top pf-l-flex pf-u-display-flex pf-m-justify-content-flex-start pf-m-nowrap">
              <label htmlFor="bucket-input" className="pf-l-flex__item">
                <span className="pf-c-form__label-text">Storage bucket</span>
                <span className="pf-c-form__label-required" aria-hidden="true">
                  &#42;
                </span>
              </label>
              <Popover
                id="bucket-popover"
                bodyContent={
                  <>
                    <FormattedMessage
                      defaultMessage="
                        Provide the Google Cloud Storage {bucket} name to which the image file will be uploaded before being imported into Compute Engine. 
                        The {bucket} must already exist and be of STANDARD storage class."
                      values={{
                        bucket: "bucket",
                      }}
                    />
                  </>
                }
                aria-label={formatMessage(ariaLabels.bucket)}
              >
                <Button variant="plain" aria-label={formatMessage(ariaLabels.bucket)}>
                  <OutlinedQuestionCircleIcon id="popover-icon" />
                </Button>
              </Popover>
            </div>
            <TextInput
              className="pf-c-form-control"
              value={uploadSettings.bucket}
              type="text"
              id="bucket-input"
              name="bucket"
              onChange={setUploadSettings}
            />
          </div>
          <div className="pf-c-form__group">
            <div className="pf-c-form__label pf-m-no-padding-top pf-l-flex pf-u-display-flex pf-m-justify-content-flex-start pf-m-nowrap">
              <label htmlFor="region-input" className="pf-l-flex__item">
                <span className="pf-c-form__label-text">
                  <FormattedMessage defaultMessage="Storage region" />
                </span>
                <span className="pf-c-form__label-required" aria-hidden="true">
                  &#42;
                </span>
              </label>
              <Popover
                id="region-popover"
                bodyContent={
                  <FormattedMessage
                    defaultMessage="Provide the Storage Region where you want to import your image."
                  />
                }
                aria-label={formatMessage(ariaLabels.region)}
              >
                <Button variant="plain" aria-label={formatMessage(ariaLabels.region)}>
                  <OutlinedQuestionCircleIcon id="popover-icon" />
                </Button>
              </Popover>
            </div>
            <TextInput
              className="pf-c-form-control"
              value={uploadSettings.region}
              type="text"
              id="region-input"
              name="region"
              onChange={setUploadSettings}
            />
          </div>
        </Form>
      </>
    );
  }
}

GCPDestinationStep.propTypes = {
  intl: intlShape.isRequired,
  imageName: PropTypes.string,
  setUploadSettings: PropTypes.func,
  setImageName: PropTypes.func,
  uploadSettings: PropTypes.object,
};

GCPDestinationStep.defaultProps = {
  imageName: "",
  uploadSettings: {},
  setImageName() {},
  setUploadSettings() {},
};

export default injectIntl(GCPDestinationStep);
