function redeemVoucher() {
    const voucherAmount = document.getElementById('voucherAmount');
    alert(`You have redeemed a voucher of ${voucherAmount.innerText}!`);
    voucherAmount.innerText = '$0.00'; // Reset voucher amount
}

function claimCashback() {
    const cashbackAmount = document.getElementById('cashbackAmount');
    alert(`You have claimed a cashback of ${cashbackAmount.innerText}!`);
    cashbackAmount.innerText = '$0.00'; // Reset cashback amount
}
