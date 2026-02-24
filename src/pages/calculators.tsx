import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Header from '../components/Header'; 
import CTABlock from '../components/CTABlock';
import BackToTop from '../components/BackToTop';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('angle');

  return (
    <Layout title="Калькуляторы" description="Геодезические калькуляторы онлайн">
      <Header />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px', width: '100%'  }}>
        
        <h1 style={{ 
          fontSize: '48px', 
          color: '#2D5A27', 
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '16px',
          textAlign: 'center' 
        }}>
          Геодезические калькуляторы
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#6B776D', 
          marginBottom: '48px',
          textAlign: 'center' 
        }}>
          Простые инструменты для быстрых расчётов в поле и камералке.
        </p>

        {/* Сетка вкладок — 2 ряда */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '12px', 
          marginBottom: '32px',
          borderBottom: '1px solid #D4DCCD',
          paddingBottom: '16px',
          maxWidth: '800px',
          margin: '0 auto',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setActiveTab('angle')}
            style={{
              background: activeTab === 'angle' ? '#2D5A27' : 'transparent',
              color: activeTab === 'angle' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              width: 'calc(25% - 9px)',
            }}
          >
            📐 Градусы ↔ десятичные
          </button>
          <button
            onClick={() => setActiveTab('distance')}
            style={{
              background: activeTab === 'distance' ? '#2D5A27' : 'transparent',
              color: activeTab === 'distance' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
            }}
          >
            📏 Расстояние по координатам
          </button>
          <button
            onClick={() => setActiveTab('direct')}
            style={{
              background: activeTab === 'direct' ? '#2D5A27' : 'transparent',
              color: activeTab === 'direct' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
            }}
          >
            🧭 Прямая геодезическая
          </button>
          <button
            onClick={() => setActiveTab('inverse')}
            style={{
              background: activeTab === 'inverse' ? '#2D5A27' : 'transparent',
              color: activeTab === 'inverse' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
            }}
          >
            🔄 Обратная геодезическая
          </button>
          <button
            onClick={() => setActiveTab('zone')}
            style={{
              background: activeTab === 'zone' ? '#2D5A27' : 'transparent',
              color: activeTab === 'zone' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
            }}
          >
            🗺️ Пересчёт зон
          </button>
          <button
            onClick={() => setActiveTab('height')}
            style={{
              background: activeTab === 'height' ? '#2D5A27' : 'transparent',
              color: activeTab === 'height' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
            }}
          >
            ⛰️ Поправки высот
          </button>
          <button
            onClick={() => setActiveTab('scale')}
            style={{
              background: activeTab === 'scale' ? '#2D5A27' : 'transparent',
              color: activeTab === 'scale' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
            }}
          >
            📏 Калькулятор масштабов
          </button>
          <button
            onClick={() => setActiveTab('error')}
            style={{
              background: activeTab === 'error' ? '#2D5A27' : 'transparent',
              color: activeTab === 'error' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
            }}
          >
            📊 СКП (погрешности)
          </button>
          <button
            onClick={() => setActiveTab('zoneNumber')}
            style={{
              background: activeTab === 'zoneNumber' ? '#2D5A27' : 'transparent',
              color: activeTab === 'zoneNumber' ? 'white' : '#2D5A27',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'calc(25% - 9px)',
              minWidth: '160px'
            }}
          >
            🗺️ Номер зоны по долготе
          </button>
        </div>
            
        {/* Контейнер для активного калькулятора */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 12px 24px rgba(45, 90, 39, 0.06)',
          border: '1px solid rgba(167, 196, 160, 0.2)',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 auto',  
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}>
          <div style={{ width: '100%', maxWidth: '900px' }}>
            {activeTab === 'angle' && <AngleConverter />}
            {activeTab === 'distance' && <DistanceCalculator />}
            {activeTab === 'direct' && <DirectGeodeticTask />}
            {activeTab === 'inverse' && <InverseGeodeticTask />}
            {activeTab === 'zone' && <ZoneConverter />}          {/* старый пересчёт зон */}
            {activeTab === 'height' && <HeightCorrection />}
            {activeTab === 'scale' && <ScaleCalculator />}
            {activeTab === 'error' && <ErrorCalculator />}
            {activeTab === 'zoneNumber' && <ZoneCalculator />}   {/* новый номер зоны */}
          </div>
        </div>
        <div style={{ 
          marginTop: '48px', 
          padding: '24px',
          background: '#F0F4EF',
          borderRadius: '16px',
          fontSize: '15px',
          color: '#6B776D',
          textAlign: 'center'
        }}>
          ⚡ Калькуляторы работают полностью в браузере, данные не уходят на сервер.
        </div>
      </div>
      {/* CTA-блок на всю ширину */}
    <CTABlock 
      title="Нужен калькулятор, которого нет на сайте?"
      description="Напишите нам в Telegram — мы добавим нужный инструмент"
      buttonText="Предложить калькулятор"
      buttonLink="https://t.me/GeodezistOnlineBot"
    />
      <BackToTop />
   </Layout>
  );
}

// ============ КОМПОНЕНТЫ КАЛЬКУЛЯТОРОВ ============

// 1. Конвертер градусов (уже был)
function AngleConverter() {
  const [degrees, setDegrees] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [decimal, setDecimal] = useState('');
  const [mode, setMode] = useState('dms2dec');

  const dmsToDecimal = () => {
    if (!degrees && !minutes && !seconds) {
      setDecimal('empty');
      return;
    }
    const d = parseFloat(degrees) || 0;
    const m = parseFloat(minutes) || 0;
    const s = parseFloat(seconds) || 0;
    const result = d + m/60 + s/3600;
    setDecimal(result.toFixed(6));
  };

  const decimalToDms = () => {
    if (!decimal) {
      setDegrees('empty');
      return;
    }
    const dec = parseFloat(decimal) || 0;
    const d = Math.floor(dec);
    const m = Math.floor((dec - d) * 60);
    const s = ((dec - d - m/60) * 3600).toFixed(2);
    setDegrees(d);
    setMinutes(m);
    setSeconds(s);
  };

  return (
    <div style={{  width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>
        Перевод градусов/минут/секунд ↔ десятичные градусы
      </h3>
      
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
        <button onClick={() => setMode('dms2dec')} style={{ background: mode === 'dms2dec' ? '#2D5A27' : 'white', color: mode === 'dms2dec' ? 'white' : '#2D5A27', border: '1px solid #2D5A27', padding: '10px 24px', borderRadius: '30px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>DMS → Десятичные</button>
        <button onClick={() => setMode('dec2dms')} style={{ background: mode === 'dec2dms' ? '#2D5A27' : 'white', color: mode === 'dec2dms' ? 'white' : '#2D5A27', border: '1px solid #2D5A27', padding: '10px 24px', borderRadius: '30px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Десятичные → DMS</button>
      </div>

      {mode === 'dms2dec' ? (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Градусы</label>
              <input type="number" value={degrees} onChange={(e) => setDegrees(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Минуты</label>
              <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Секунды</label>
              <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
          </div>
          <button onClick={dmsToDecimal} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать</button>
          {decimal === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Введите хотя бы одно значение</div>}
          {decimal && decimal !== 'empty' && (
            <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px', fontSize: '18px' }}>
              <span style={{ color: '#6B776D' }}>Результат: </span>
              <span style={{ color: '#2D5A27', fontWeight: 700 }}>{decimal}°</span>
            </div>
          )}
        </>
      ) : (
        <>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Десятичные градусы</label>
            <input type="number" value={decimal} onChange={(e) => setDecimal(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <button onClick={decimalToDms} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать</button>
          {degrees === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Введите значение</div>}
          {degrees !== '' && degrees !== 'empty' && (
            <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px', fontSize: '18px' }}>
              <span style={{ color: '#6B776D' }}>Результат: </span>
              <span style={{ color: '#2D5A27', fontWeight: 700 }}>{degrees}° {minutes}′ {seconds}″</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// 2. Расстояние по координатам (был)
function DistanceCalculator() {
  const [lat1, setLat1] = useState('');
  const [lon1, setLon1] = useState('');
  const [lat2, setLat2] = useState('');
  const [lon2, setLon2] = useState('');
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    if (!lat1 || !lon1 || !lat2 || !lon2) {
      setDistance('empty');
      return;
    }
    const R = 6371000;
    const φ1 = parseFloat(lat1) * Math.PI / 180;
    const φ2 = parseFloat(lat2) * Math.PI / 180;
    const Δφ = (parseFloat(lat2) - parseFloat(lat1)) * Math.PI / 180;
    const Δλ = (parseFloat(lon2) - parseFloat(lon1)) * Math.PI / 180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    setDistance(d);
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>Расстояние между двумя точками (гаверсинус)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', width: '100%' }}>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Точка 1</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Широта</label>
            <input type="number" value={lat1} onChange={(e) => setLat1(e.target.value)} placeholder="55.7558" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Долгота</label>
            <input type="number" value={lon1} onChange={(e) => setLon1(e.target.value)} placeholder="37.6176" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Точка 2</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Широта</label>
            <input type="number" value={lat2} onChange={(e) => setLat2(e.target.value)} placeholder="59.9311" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Долгота</label>
            <input type="number" value={lon2} onChange={(e) => setLon2(e.target.value)} placeholder="30.3609" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
        </div>
      </div>
      <button onClick={calculateDistance} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать расстояние</button>
      {distance === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Введите координаты обеих точек</div>}
      {distance && distance !== 'empty' && (
        <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
          <div style={{ marginBottom: '8px' }}><span style={{ color: '#6B776D' }}>Расстояние: </span><span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '20px' }}>{distance.toFixed(2)} м</span></div>
          <div style={{ color: '#6B776D', fontSize: '14px' }}>≈ {(distance / 1000).toFixed(3)} км</div>
        </div>
      )}
    </div>
  );
}

// 3. Прямая геодезическая задача (была)
function DirectGeodeticTask() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [angle, setAngle] = useState('');
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!x || !y || !angle || !distance) {
      setResult('empty');
      return;
    }
    const x1 = parseFloat(x) || 0;
    const y1 = parseFloat(y) || 0;
    const a = parseFloat(angle) * Math.PI / 180 || 0;
    const d = parseFloat(distance) || 0;
    const x2 = x1 + d * Math.cos(a);
    const y2 = y1 + d * Math.sin(a);
    setResult({ x: x2.toFixed(3), y: y2.toFixed(3) });
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>Прямая геодезическая задача</h3>
      <p style={{ color: '#6B776D', marginBottom: '24px', fontSize: '15px' }}>По известным координатам точки, дирекционному углу и горизонтальному проложению вычислить координаты второй точки.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', width: '100%' }}>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Исходная точка</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>X (север)</label>
            <input type="number" value={x} onChange={(e) => setX(e.target.value)} placeholder="5000.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Y (восток)</label>
            <input type="number" value={y} onChange={(e) => setY(e.target.value)} placeholder="5000.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Параметры</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Дирекционный угол (°)</label>
            <input type="number" value={angle} onChange={(e) => setAngle(e.target.value)} placeholder="45.0" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Горизонтальное проложение (м)</label>
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="100.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
        </div>
      </div>
      <button onClick={calculate} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать</button>
      {result === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Заполните все поля</div>}
      {result && result !== 'empty' && (
        <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
          <div style={{ marginBottom: '8px' }}><span style={{ color: '#6B776D' }}>Координаты второй точки: </span></div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div><span style={{ color: '#6B776D', fontSize: '14px' }}>X: </span><span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '18px' }}>{result.x} м</span></div>
            <div><span style={{ color: '#6B776D', fontSize: '14px' }}>Y: </span><span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '18px' }}>{result.y} м</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ НОВЫЕ КАЛЬКУЛЯТОРЫ ============

// 4. Обратная геодезическая задача
function InverseGeodeticTask() {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!x1 || !y1 || !x2 || !y2) {
      setResult('empty');
      return;
    }
    const dx = parseFloat(x2) - parseFloat(x1);
    const dy = parseFloat(y2) - parseFloat(y1);
    const distance = Math.sqrt(dx*dx + dy*dy);
    let angle = Math.atan2(dy, dx) * 180 / Math.PI;
    if (angle < 0) angle += 360;
    
    setResult({
      distance: distance.toFixed(3),
      angle: angle.toFixed(4),
      dx: dx.toFixed(3),
      dy: dy.toFixed(3)
    });
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>Обратная геодезическая задача</h3>
      <p style={{ color: '#6B776D', marginBottom: '24px', fontSize: '15px' }}>По координатам двух точек вычислить расстояние между ними и дирекционный угол.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Точка 1</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>X1</label>
            <input type="number" value={x1} onChange={(e) => setX1(e.target.value)} placeholder="5000.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Y1</label>
            <input type="number" value={y1} onChange={(e) => setY1(e.target.value)} placeholder="5000.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Точка 2</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>X2</label>
            <input type="number" value={x2} onChange={(e) => setX2(e.target.value)} placeholder="5100.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Y2</label>
            <input type="number" value={y2} onChange={(e) => setY2(e.target.value)} placeholder="5200.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
        </div>
      </div>
      <button onClick={calculate} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать</button>
      {result === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Введите координаты обеих точек</div>}
      {result && result !== 'empty' && (
        <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div><span style={{ color: '#6B776D' }}>Расстояние: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.distance} м</span></div>
            <div><span style={{ color: '#6B776D' }}>Дирекционный угол: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.angle}°</span></div>
            <div><span style={{ color: '#6B776D' }}>ΔX: </span><span style={{ color: '#2D5A27' }}>{result.dx} м</span></div>
            <div><span style={{ color: '#6B776D' }}>ΔY: </span><span style={{ color: '#2D5A27' }}>{result.dy} м</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

// 5. Пересчёт координат из зоны в зону (упрощённый)
function ZoneConverter() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [fromZone, setFromZone] = useState('6');
  const [toZone, setToZone] = useState('6');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!x || !y) {
      setResult('empty');
      return;
    }
    // Упрощённый пересчёт: смещение на 3° в долготе (примерно 334 км на широте Москвы)
    const zoneWidth = 6; // ширина зоны в градусах
    const zoneShift = (parseInt(toZone) - parseInt(fromZone)) * zoneWidth;
    const kmPerDegree = 111.3; // км в 1 градусе на экваторе
    const shiftMeters = zoneShift * kmPerDegree * 1000 * Math.cos(55 * Math.PI/180); // для широты 55°
    
    setResult({
      x: (parseFloat(x)).toFixed(3),
      y: (parseFloat(y) + (parseInt(toZone) - parseInt(fromZone)) * 1000000).toFixed(3),
      description: `Приблизительный пересчёт из ${fromZone} в ${toZone} зону. Для точных расчётов используйте трансформацию координат.`
    });
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>Пересчёт координат из зоны в зону</h3>
      <p style={{ color: '#6B776D', marginBottom: '24px', fontSize: '15px' }}>
        ⚠️ Упрощённый калькулятор для приблизительных расчётов. Для точных работ используйте профессиональное ПО.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', width: '100%' }}>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Координаты</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>X (север)</label>
            <input type="number" value={x} onChange={(e) => setX(e.target.value)} placeholder="500000.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Y (восток)</label>
            <input type="number" value={y} onChange={(e) => setY(e.target.value)} placeholder="500000.00" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '16px', color: '#2D5A27', marginBottom: '16px' }}>Зоны</h4>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>Из зоны</label>
            <select value={fromZone} onChange={(e) => setFromZone(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px', background: 'white' }}>
              <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
              <option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#6B776D', fontSize: '14px' }}>В зону</label>
            <select value={toZone} onChange={(e) => setToZone(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px', background: 'white' }}>
              <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
              <option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <button onClick={calculate} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Пересчитать</button>
      {result === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Введите координаты</div>}
      {result && result !== 'empty' && (
        <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ color: '#6B776D' }}>Новые координаты: </span>
          </div>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '12px' }}>
            <div><span style={{ color: '#6B776D', fontSize: '14px' }}>X: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.x} м</span></div>
            <div><span style={{ color: '#6B776D', fontSize: '14px' }}>Y: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.y} м</span></div>
          </div>
          <div style={{ color: '#B85C1F', fontSize: '14px', background: '#FFF3E0', padding: '12px', borderRadius: '8px' }}>
            {result.description}
          </div>
        </div>
      )}
    </div>
  );
}

// 6. Пересчёт высот через поправки
function HeightCorrection() {
  const [height, setHeight] = useState('');
  const [temp, setTemp] = useState('20');
  const [pressure, setPressure] = useState('760');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!height) {
      setResult('empty');
      return;
    }
    const h = parseFloat(height);
    const t = parseFloat(temp) || 20;
    const p = parseFloat(pressure) || 760;
    
    // Поправка за температуру: +1 мм на 10° отклонения на 100 м
    const tempCorr = (t - 20) * 0.001 * (h / 100);
    // Поправка за давление: +1 мм на 3 мм рт.ст. отклонения на 100 м
    const pressCorr = (760 - p) * 0.00033 * (h / 100);
    const totalCorr = tempCorr + pressCorr;
    
    setResult({
      original: h.toFixed(3),
      corrected: (h + totalCorr).toFixed(3),
      tempCorr: tempCorr.toFixed(3),
      pressCorr: pressCorr.toFixed(3),
      totalCorr: totalCorr.toFixed(3)
    });
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>Пересчёт высот с поправками</h3>
      <p style={{ color: '#6B776D', marginBottom: '24px', fontSize: '15px' }}>
        Ввод поправок за температуру и давление при тригонометрическом нивелировании.
      </p>
       <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr 1fr', 
        gap: '24px', 
        marginBottom: '24px',
        width: '100%'
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>
            Измеренная высота (м)
          </label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            placeholder="100.00" 
            style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px', boxSizing: 'border-box' }} 
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>
            Температура (°C)
          </label>
          <input 
            type="number" 
            value={temp} 
            onChange={(e) => setTemp(e.target.value)} 
            placeholder="20" 
            style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px', boxSizing: 'border-box' }} 
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>
            Давление (мм рт.ст.)
          </label>
          <input 
            type="number" 
            value={pressure} 
            onChange={(e) => setPressure(e.target.value)} 
            placeholder="760" 
            style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px', boxSizing: 'border-box' }} 
          />
        </div>
      </div>
      <button onClick={calculate} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать</button>
      {result === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Введите измеренную высоту</div>}
      {result && result !== 'empty' && (
        <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div><span style={{ color: '#6B776D' }}>Исходная высота: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.original} м</span></div>
            <div><span style={{ color: '#6B776D' }}>Исправленная: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.corrected} м</span></div>
            <div><span style={{ color: '#6B776D' }}>Поправка t°: </span><span style={{ color: '#2D5A27' }}>{result.tempCorr} м</span></div>
            <div><span style={{ color: '#6B776D' }}>Поправка P: </span><span style={{ color: '#2D5A27' }}>{result.pressCorr} м</span></div>
            <div><span style={{ color: '#6B776D' }}>Суммарная: </span><span style={{ color: '#2D5A27', fontWeight: 600 }}>{result.totalCorr} м</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

// 7. Калькулятор масштабов
function ScaleCalculator() {
  const [realLength, setRealLength] = useState('');
  const [mapLength, setMapLength] = useState('');
  const [scale, setScale] = useState('');
  const [mode, setMode] = useState('real2map');

  const calculateRealToMap = () => {
    if (!realLength || !scale) {
      setMapLength('empty');
      return;
    }
    const real = parseFloat(realLength);
    const scaleNum = parseFloat(scale);
    const map = real / scaleNum;
    setMapLength(map.toFixed(2));
  };

  const calculateMapToReal = () => {
    if (!mapLength || !scale) {
      setRealLength('empty');
      return;
    }
    const map = parseFloat(mapLength);
    const scaleNum = parseFloat(scale);
    const real = map * scaleNum;
    setRealLength(real.toFixed(2));
  };

  const calculateScale = () => {
    if (!realLength || !mapLength) {
      setScale('empty');
      return;
    }
    const real = parseFloat(realLength);
    const map = parseFloat(mapLength);
    const scaleNum = real / map;
    setScale(scaleNum.toFixed(0));
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>Калькулятор масштабов</h3>
      
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
        <button onClick={() => setMode('real2map')} style={{ background: mode === 'real2map' ? '#2D5A27' : 'white', color: mode === 'real2map' ? 'white' : '#2D5A27', border: '1px solid #2D5A27', padding: '10px 24px', borderRadius: '30px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Длина на местности → на карте</button>
        <button onClick={() => setMode('map2real')} style={{ background: mode === 'map2real' ? '#2D5A27' : 'white', color: mode === 'map2real' ? 'white' : '#2D5A27', border: '1px solid #2D5A27', padding: '10px 24px', borderRadius: '30px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Длина на карте → на местности</button>
        <button onClick={() => setMode('calc')} style={{ background: mode === 'calc' ? '#2D5A27' : 'white', color: mode === 'calc' ? 'white' : '#2D5A27', border: '1px solid #2D5A27', padding: '10px 24px', borderRadius: '30px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Вычислить масштаб</button>
      </div>

      {mode === 'real2map' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', width: '100%' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Длина на местности (м)</label>
              <input type="number" value={realLength} onChange={(e) => setRealLength(e.target.value)} placeholder="1000" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Масштаб (1:?)</label>
              <input type="number" value={scale} onChange={(e) => setScale(e.target.value)} placeholder="1000" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
          </div>
          <button onClick={calculateRealToMap} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать</button>
          {mapLength === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Заполните оба поля</div>}
          {mapLength && mapLength !== 'empty' && (
            <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
              <span style={{ color: '#6B776D' }}>Длина на карте: </span>
              <span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '20px' }}>{mapLength} см</span>
            </div>
          )}
        </>
      )}

      {mode === 'map2real' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', width: '100%' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Длина на карте (см)</label>
              <input type="number" value={mapLength} onChange={(e) => setMapLength(e.target.value)} placeholder="10" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Масштаб (1:?)</label>
              <input type="number" value={scale} onChange={(e) => setScale(e.target.value)} placeholder="1000" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
          </div>
          <button onClick={calculateMapToReal} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Рассчитать</button>
          {realLength === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Заполните оба поля</div>}
          {realLength && realLength !== 'empty' && (
            <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
              <span style={{ color: '#6B776D' }}>Длина на местности: </span>
              <span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '20px' }}>{realLength} м</span>
            </div>
          )}
        </>
      )}

      {mode === 'calc' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px', width: '100%' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Длина на местности (м)</label>
              <input type="number" value={realLength} onChange={(e) => setRealLength(e.target.value)} placeholder="1000" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>Длина на карте (см)</label>
              <input type="number" value={mapLength} onChange={(e) => setMapLength(e.target.value)} placeholder="10" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D4DCCD', fontSize: '16px' }} />
            </div>
          </div>
          <button onClick={calculateScale} style={{ background: '#2D5A27', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', marginBottom: '24px' }}>Вычислить масштаб</button>
          {scale === 'empty' && <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>⚠️ Заполните оба поля</div>}
          {scale && scale !== 'empty' && (
            <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
              <span style={{ color: '#6B776D' }}>Масштаб: </span>
              <span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '20px' }}>1 : {scale}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// 8. Калькулятор погрешностей (СКП)
function ErrorCalculator() {
  const [measurements, setMeasurements] = useState('');
  const [trueValue, setTrueValue] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!measurements) {
      setResult('empty');
      return;
    }

    const values = measurements.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    if (values.length === 0) {
      setResult('empty');
      return;
    }

    const n = values.length;
    const avg = values.reduce((a, b) => a + b, 0) / n;
    
    let skp = 0;
    if (trueValue) {
      // Истинная СКП (по истинным ошибкам)
      const trueVal = parseFloat(trueValue);
      const errors = values.map(v => v - trueVal);
      const sumSq = errors.reduce((a, b) => a + b*b, 0);
      skp = Math.sqrt(sumSq / n);
    } else {
      // Средняя квадратическая погрешность (по уклонениям от среднего)
      const deviations = values.map(v => v - avg);
      const sumSq = deviations.reduce((a, b) => a + b*b, 0);
      skp = Math.sqrt(sumSq / (n - 1));
    }

    const variance = skp * skp;
    const probable = skp * 2/3; // вероятная погрешность
    const limit = skp * 3; // предельная погрешность

    setResult({
      n,
      avg: avg.toFixed(3),
      skp: skp.toFixed(3),
      variance: variance.toFixed(3),
      probable: probable.toFixed(3),
      limit: limit.toFixed(3)
    });
  };

  return (
    <div style={{ width: '760px', maxWidth: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>
        Калькулятор погрешностей (СКП)
      </h3>
      <p style={{ color: '#6B776D', marginBottom: '24px', fontSize: '15px' }}>
        Введите ряд измерений через запятую. Если известно истинное значение, укажите его — будет вычислена истинная СКП.
      </p>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>
          Результаты измерений
        </label>
        <input
          type="text"
          value={measurements}
          onChange={(e) => setMeasurements(e.target.value)}
          placeholder="100.1, 100.3, 99.8, 100.0, 100.2"
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #D4DCCD',
            fontSize: '16px'
          }}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>
          Истинное значение (необязательно)
        </label>
        <input
          type="number"
          value={trueValue}
          onChange={(e) => setTrueValue(e.target.value)}
          placeholder="100.00"
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #D4DCCD',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <button
        onClick={calculate}
        style={{
          background: '#2D5A27',
          color: 'white',
          border: 'none',
          padding: '14px 32px',
          borderRadius: '30px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '24px'
        }}
      >
        Рассчитать
      </button>

      {result === 'empty' && (
        <div style={{ background: '#FFF3E0', padding: '20px', borderRadius: '12px', color: '#B85C1F', border: '1px solid #FFD19B' }}>
          ⚠️ Введите хотя бы одно измерение
        </div>
      )}

      {result && result !== 'empty' && (
        <div style={{ background: '#F0F4EF', padding: '20px', borderRadius: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div><span style={{ color: '#6B776D' }}>Количество измерений: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.n}</span></div>
            <div><span style={{ color: '#6B776D' }}>Среднее арифметическое: </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>{result.avg}</span></div>
            <div><span style={{ color: '#6B776D' }}>СКП (средняя квадратическая): </span><span style={{ color: '#2D5A27', fontWeight: 700 }}>±{result.skp}</span></div>
            <div><span style={{ color: '#6B776D' }}>Дисперсия: </span><span style={{ color: '#2D5A27' }}>{result.variance}</span></div>
            <div><span style={{ color: '#6B776D' }}>Вероятная погрешность: </span><span style={{ color: '#2D5A27' }}>±{result.probable}</span></div>
            <div><span style={{ color: '#6B776D' }}>Предельная погрешность (3σ): </span><span style={{ color: '#2D5A27' }}>±{result.limit}</span></div>
          </div>
        </div>
      )}
    </div>
  );
}
// 9. Калькулятор номера зоны
function ZoneCalculator() {
  const [longitude, setLongitude] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!longitude) {
      setResult('empty');
      return;
    }
    
    const lon = parseFloat(longitude);
    if (lon < 0 || lon > 360) {
      setResult('invalid');
      return;
    }
    
    const zone = Math.floor(lon / 6) + 1;
    const centralMeridian = zone * 6 - 3;
    
    setResult({
      zone: zone,
      centralMeridian: centralMeridian
    });
  };

  return (
    <div>
      <h3 style={{ fontSize: '24px', color: '#2D5A27', marginBottom: '24px', fontWeight: 600 }}>
        Определение номера зоны по долготе
      </h3>
      <p style={{ color: '#6B776D', marginBottom: '24px', fontSize: '15px' }}>
        Введите долготу в градусах (от 0 до 360) — калькулятор определит номер 6-градусной зоны 
        и осевой меридиан в проекции Гаусса-Крюгера.
      </p>
      
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#6B776D', fontSize: '14px' }}>
          Долгота (градусы)
        </label>
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="37.6"
          step="0.1"
          min="0"
          max="360"
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #D4DCCD',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <button
        onClick={calculate}
        style={{
          background: '#2D5A27',
          color: 'white',
          border: 'none',
          padding: '14px 32px',
          borderRadius: '30px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '24px'
        }}
      >
        Рассчитать
      </button>

      {result === 'empty' && (
        <div style={{ 
          background: '#FFF3E0', 
          padding: '20px', 
          borderRadius: '12px', 
          color: '#B85C1F', 
          border: '1px solid #FFD19B' 
        }}>
          ⚠️ Введите долготу
        </div>
      )}

      {result === 'invalid' && (
        <div style={{ 
          background: '#FFF3E0', 
          padding: '20px', 
          borderRadius: '12px', 
          color: '#B85C1F', 
          border: '1px solid #FFD19B' 
        }}>
          ⚠️ Долгота должна быть от 0 до 360 градусов
        </div>
      )}

      {result && result !== 'empty' && result !== 'invalid' && (
        <div style={{ 
          background: '#F0F4EF', 
          padding: '20px', 
          borderRadius: '12px' 
        }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ color: '#6B776D' }}>Номер зоны: </span>
            <span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '20px' }}>
              {result.zone}
            </span>
          </div>
          <div>
            <span style={{ color: '#6B776D' }}>Осевой меридиан: </span>
            <span style={{ color: '#2D5A27', fontWeight: 700, fontSize: '20px' }}>
              {result.centralMeridian}°
            </span>
          </div>
        </div>
      )}
    </div>
  );
}