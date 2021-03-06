// @flow

/**
 * @desc Component that renders chat list item.
 * @type React.Component
 */

import React from 'react';
import { Image } from 'react-native';

import ListItem from './ListItem';
import GlobalStyles from '../../global/Styles';
import AssetsImages from '../../global/AssetsImages';

type Props = {
  /**
   * @desc Name of chat partner.
   */
  name: string,
  /**
   * @desc Last message to show on preview.
   */
  lastMessage?: string | null,
  /**
   * @desc Base64 avatar of partner.
   */
  avatar: Image.propTypes.source,
  /**
   * @desc Id that will be passed in onPress callback.
   */
  id: number,
  /**
   * @desc Callback on press item.
   * @param Id of item that was pressed.
   */
  onPress: (id: number) => void,
  /**
   * @desc unreadMessages indicator for new messages in Chat
   */
  unreadMessages: boolean,
}

const ChatListItem = ({
  name, id, onPress, avatar, lastMessage, unreadMessages,
}: Props) => (
  <ListItem
    id={id}
    text={name}
    textStyle={GlobalStyles.detailedItemTitle}
    onPress={onPress}
    iconSource={avatar}
    style={GlobalStyles.detailedItemContainer}
    subtitle={lastMessage}
    AdditionalLeftView={() =>
      <Image source={unreadMessages ? AssetsImages.ChatUI.newMsgIcon : null} style={GlobalStyles.sectionListNewMessage} />
    }
  />
);

ChatListItem.defaultProps = {
  name: '',
  onPress: () => null,
  avatar: null,
  lastMessage: undefined,
};

export default ChatListItem;
