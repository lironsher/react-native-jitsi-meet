/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';
import * as Animatable from 'react-native-animatable';
export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetModule;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, userInfo) => {
	userInfo = userInfo || {};
	call(url, userInfo);
};
JitsiMeetModule.audioCall = (url, userInfo) => {
	userInfo = userInfo || {};
	audioCall(url, userInfo);
};
export default JitsiMeetModule;
