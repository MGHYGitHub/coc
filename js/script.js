// 显示QQ号码弹窗---单独显示(加密需要注释掉此段)
// function showQQ(qqElementId, qqNumber) {
//     // 获取弹窗元素
//     const popup = document.getElementById(qqElementId);
//     // 如果存在弹窗元素
//     if (popup) {
//         // 如果弹窗当前为显示状态
//         if (popup.style.display === 'block') {
//             // 隐藏弹窗
//             popup.style.display = 'none';
//         } else {
//             // 首先隐藏所有弹窗
//             const popups = document.querySelectorAll('.qq-number-popup');
//             popups.forEach(popup => {
//                 popup.style.display = 'none';
//             });

//             // 更新弹窗内容为QQ号码
//             popup.textContent = `QQ: ${qqNumber}`;

//             // 显示弹窗
//             popup.style.display = 'block';

//             // 2秒后自动隐藏弹窗
//             setTimeout(() => {
//                 popup.style.display = 'none';
//             }, 2000);
//         }
//     }
// }

// 加密QQ号码板块,虽然前端一个F12就能看到了没啥软用 1-1和1-2注释掉

// 1-1显示QQ号码弹窗
function showQQ(qqElementId, qqNumber) {
    // 获取弹窗元素
    const popup = document.getElementById(qqElementId);
    // 如果存在弹窗元素
    if (popup) {
        // 如果弹窗当前为显示状态
        if (popup.style.display === 'block') {
            // 隐藏弹窗
            popup.style.display = 'none';
        } else {
            // 首先隐藏所有弹窗
            const popups = document.querySelectorAll('.qq-number-popup');
            popups.forEach(popup => {
                popup.style.display = 'none';
            });

            // 加密QQ号码
            const encryptedQQ = encryptQQ(qqNumber);

            // 更新弹窗内容为加密后的QQ号码
            popup.textContent = `QQ号码: ${encryptedQQ}`;

            // 显示弹窗
            popup.style.display = 'block';

            // 2秒后自动隐藏弹窗
            setTimeout(() => {
                popup.style.display = 'none';
            }, 2000);
        }
    }
}

// 1-2加密QQ号码
function encryptQQ(qqNumber) {
    // 加密QQ号码中间部分
    const len = qqNumber.length;
    const firstPart = qqNumber.substring(0, 3);
    const lastPart = qqNumber.substring(len - 3, len);
    const middlePart = '*'.repeat(len - 6);
    return firstPart + middlePart + lastPart;
}

window.onload = function() {
    // 获取上次关闭公告的时间
    var lastClosedTime = getCookie('lastClosedTime');

    // 如果从未关闭过公告或者距离上次关闭时间超过5分钟
    if (!lastClosedTime || isExpired(lastClosedTime, 5 * 60 * 1000)) {
        openModal(); // 打开公告
    }
};

// 检查时间是否过期
function isExpired(lastTime, duration) {
    var currentTime = new Date().getTime();
    return (currentTime - lastTime) >= duration;
}

// 设置 cookie
function setCookie(name, value, duration) {
    var expires = new Date();
    expires.setTime(expires.getTime() + duration);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

// 获取 cookie
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return parseInt(cookie.substring(name.length + 1), 10);
        }
    }
    return null;
}

// 关闭公告
function closeModal() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    // 记录关闭公告的时间
    setCookie('lastClosedTime', new Date().getTime(), 5 * 60 * 1000); // 设置 cookie，有效期为5分钟
}




function toggleQRCode() {
    var qrCode = document.getElementById('qqGroupQRCode');
    if (qrCode.style.display === 'none') {
        qrCode.style.display = 'block'; // 显示二维码
    } else {
        qrCode.style.display = 'none'; // 隐藏二维码
    }
}
