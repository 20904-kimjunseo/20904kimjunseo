document.getElementById('thermoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let pressure = parseFloat(document.getElementById('pressure').value);
    let volume = parseFloat(document.getElementById('volume').value);
    let temperatureKelvin = parseFloat(document.getElementById('temperature').value);

    // 이상 기체 상태 방정식 PV = nRT, 여기서 n=1로 가정
    const R = 8.314;  // 기체 상수 (J/(mol·K))
    let result = (pressure * volume) / (R * temperatureKelvin);

    // SweetAlert2로 결과 출력
    Swal.fire({
        title: '계산 완료!',
        html: `
            <p><strong>압력:</strong> ${pressure} Pa</p>
            <p><strong>부피:</strong> ${volume} m³</p>
            <p><strong>온도 (켈빈):</strong> ${temperatureKelvin} K</p>
            <p><strong>계산된 몰 수:</strong> ${result.toFixed(2)} mol</p>
        `,
        icon: 'success',
        confirmButtonText: '확인',
        width: '400px',
        background: '#f3f4f6',
        backdrop: `rgba(0,0,123,0.4)`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    // 추가적인 시각적 계산과정을 보여주기
    Swal.fire({
        title: '계산 과정',
        html: `
            <h5>계산식: PV = nRT</h5>
            <p><strong>1단계:</strong> 이상 기체 방정식 계산</p>
            <p>n = (P * V) / (R * T) = (${pressure} * ${volume}) / (8.314 * ${temperatureKelvin})</p>
            <p><strong>2단계:</strong> 계산된 몰 수는 ${result.toFixed(2)} mol입니다.</p>
        `,
        icon: 'info',
        confirmButtonText: '확인',
        width: '500px',
        background: '#f3f4f6',
        backdrop: `rgba(0,0,123,0.4)`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
});
