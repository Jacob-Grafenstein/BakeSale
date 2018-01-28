Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/DealItem.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _util=require('../util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DealItem=function(_Component){_inherits(DealItem,_Component);function DealItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DealItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DealItem.__proto__||Object.getPrototypeOf(DealItem)).call.apply(_ref,[this].concat(args))),_this),_this.handlePress=function(){_this.props.onPress(_this.props.deal.key);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DealItem,[{key:'render',value:function render(){var deal=this.props.deal;return _react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.card,onPress:this.handlePress,__source:{fileName:_jsxFileName,lineNumber:26}},_react2.default.createElement(_reactNative.Image,{source:{uri:deal.media[0]},style:styles.image,__source:{fileName:_jsxFileName,lineNumber:29}}),_react2.default.createElement(_reactNative.View,{style:styles.information,__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement(_reactNative.Text,{style:styles.title,__source:{fileName:_jsxFileName,lineNumber:34}},deal.title),_react2.default.createElement(_reactNative.View,{style:styles.footer,__source:{fileName:_jsxFileName,lineNumber:35}},_react2.default.createElement(_reactNative.Text,{style:styles.cause,__source:{fileName:_jsxFileName,lineNumber:36}},deal.cause.name),_react2.default.createElement(_reactNative.Text,{style:styles.price,__source:{fileName:_jsxFileName,lineNumber:37}},(0,_util.priceDisplay)(deal.price)))));}}]);return DealItem;}(_react.Component);DealItem.propTypes={deal:_propTypes2.default.object.isRequired,onPress:_propTypes2.default.func.isRequired};exports.default=DealItem;var styles=_reactNative.StyleSheet.create({card:{margin:10},image:{width:'100%',height:150},information:{padding:10,backgroundColor:'white',borderColor:'#bbb',borderWidth:1,borderTopWidth:0,flex:1},title:{fontSize:15,fontWeight:'bold',marginBottom:5},footer:{flexDirection:'row'},price:{flex:2,textAlign:'right'},cause:{flex:1,fontStyle:'italic'}});