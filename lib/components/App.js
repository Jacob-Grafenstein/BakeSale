Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/App.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _ajax=require('../ajax');var _ajax2=_interopRequireDefault(_ajax);var _DealList=require('./DealList');var _DealList2=_interopRequireDefault(_DealList);var _DealDetail=require('./DealDetail');var _DealDetail2=_interopRequireDefault(_DealDetail);var _SearchBar=require('./SearchBar');var _SearchBar2=_interopRequireDefault(_SearchBar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var App=function(_Component){_inherits(App,_Component);function App(){var _ref,_this2=this;var _temp,_this,_ret;_classCallCheck(this,App);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=App.__proto__||Object.getPrototypeOf(App)).call.apply(_ref,[this].concat(args))),_this),_this.titleXPos=new _reactNative.Animated.Value(0),_this.state={deals:[],dealsFromSearch:[],currentDealId:null},_this.animateTitle=function(){var direction=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;console.log('ANIMATE');var width=_reactNative.Dimensions.get('window').width-150;_reactNative.Animated.timing(_this.titleXPos,{toValue:direction*width/4,duration:1000,easing:_reactNative.Easing.ease}).start(function(_ref2){var finished=_ref2.finished;if(finished){_this.animateTitle(-1*direction);}});},_this.searchDeals=function _callee(searchTerm){var dealsFromSearch;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dealsFromSearch=[];if(!searchTerm){_context.next=5;break;}_context.next=4;return regeneratorRuntime.awrap(_ajax2.default.fetchDealsSearchResults(searchTerm));case 4:dealsFromSearch=_context.sent;case 5:_this.setState({dealsFromSearch:dealsFromSearch});case 6:case'end':return _context.stop();}}},null,_this2);},_this.setCurrentDeal=function(dealId){_this.setState({currentDealId:dealId});},_this.unsetCurrentDeal=function(){_this.setState({currentDealId:null,dealsFromSearch:[]});},_this.currentDeal=function(){return _this.state.deals.find(function(deal){return deal.key===_this.state.currentDealId;});},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(App,[{key:'componentDidMount',value:function componentDidMount(){var deals;return regeneratorRuntime.async(function componentDidMount$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:this.animateTitle();_context2.next=3;return regeneratorRuntime.awrap(_ajax2.default.fetchInitialDeals());case 3:deals=_context2.sent;this.setState({deals:deals});case 5:case'end':return _context2.stop();}}},null,this);}},{key:'render',value:function render(){if(this.state.currentDealId){return _react2.default.createElement(_reactNative.View,{style:styles.main,__source:{fileName:_jsxFileName,lineNumber:76}},_react2.default.createElement(_DealDetail2.default,{initialDealData:this.currentDeal(),onBack:this.unsetCurrentDeal,__source:{fileName:_jsxFileName,lineNumber:77}}));}var dealsToDisplay=this.state.dealsFromSearch.length>0?this.state.dealsFromSearch:this.state.deals;if(dealsToDisplay.length>0){return _react2.default.createElement(_reactNative.View,{style:styles.main,__source:{fileName:_jsxFileName,lineNumber:87}},_react2.default.createElement(_SearchBar2.default,{searchDeals:this.searchDeals,__source:{fileName:_jsxFileName,lineNumber:88}}),_react2.default.createElement(_DealList2.default,{deals:dealsToDisplay,onItemPress:this.setCurrentDeal,__source:{fileName:_jsxFileName,lineNumber:89}}));}return _react2.default.createElement(_reactNative.Animated.View,{style:[{left:this.titleXPos},styles.container],__source:{fileName:_jsxFileName,lineNumber:95}},_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:96}},'BakeSale'));}}]);return App;}(_react.Component);exports.default=App;var styles=_reactNative.StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center'},main:{marginTop:30},header:{fontSize:40}});