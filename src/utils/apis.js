import $ from 'jquery';
import {serverURL} from './url';

const ReqControl = (url, data) => {
  $.ajax({
    type: 'post',
    async: false,
    url: serverURL + url,
    data: data
  }).done((res) => {
    return res;
  }).catch((err) => {
    throw err;
  })
}

export default ReqControl;