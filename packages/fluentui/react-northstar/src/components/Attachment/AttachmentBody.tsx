import { compose, ComponentWithAs, ShorthandConfig } from '@fluentui/react-bindings';

import { commonPropTypes } from '../../utils';
import Box, { BoxProps, BoxStylesProps } from '../Box/Box';

interface AttachmentBodyOwnProps {}
export interface AttachmentBodyProps extends AttachmentBodyOwnProps, BoxProps {}

export type AttachmentBodyStylesProps = never;
export const attachmentBodyClassName = 'ui-attachment__body';

/**
 * An AttachmentBody provides a slot for header and description in the Attachment.
 */
const AttachmentBody = compose<'div', AttachmentBodyOwnProps, AttachmentBodyStylesProps, BoxProps, BoxStylesProps>(
  Box,
  {
    className: attachmentBodyClassName,
    displayName: 'AttachmentBody',
  },
) as ComponentWithAs<'div', AttachmentBodyProps> & { shorthandConfig: ShorthandConfig<AttachmentBodyProps> };

AttachmentBody.propTypes = commonPropTypes.createCommon();

AttachmentBody.shorthandConfig = {
  mappedProp: 'content',
};

export default AttachmentBody;
