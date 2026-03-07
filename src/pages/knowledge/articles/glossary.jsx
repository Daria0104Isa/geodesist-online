import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import ArticlePage from '../../../components/ArticlePage';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTop from '../../../components/BackToTop';

export default function GlossaryArticle() {
  const content = (
    <>
      <p>
        Глоссарий основных геодезических терминов и определений. Справочник 
        поможет начинающим специалистам быстрее освоить профессиональную 
        лексику, а опытным — освежить в памяти значения терминов.
      </p>

      <div style={{
        background: '#F0F4EF',
        padding: '20px',
        borderRadius: '12px',
        margin: '24px 0'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          📚 <strong>Как пользоваться глоссарием:</strong> Термины расположены 
          в алфавитном порядке. Для быстрого поиска используйте навигацию по 
          буквам или поиск на странице (Ctrl+F).
        </p>
      </div>

      {/* Навигация по алфавиту */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        margin: '24px 0',
        padding: '16px',
        background: 'white',
        borderRadius: '12px',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        {['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'].map(letter => (
          <a
            key={letter}
            href={`#${letter}`}
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              background: '#F0F4EF',
              color: '#2D5A27',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '16px'
            }}
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Термины на А */}
      <h2 id="А" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>А</h2>
      
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Абрис</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Схематический чертеж, выполняемый в процессе полевых работ. На абрисе 
          показывают расположение точек съемки, номера пикетов, направления 
          измерений и другие важные данные. Служит основой для составления плана.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Азимут</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Горизонтальный угол между направлением на север (истинный или магнитный) 
          и направлением на предмет. Измеряется по часовой стрелке от 0° до 360°. 
          Различают истинный азимут (от географического севера) и магнитный азимут 
          (от магнитного севера).
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Алидада</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Часть угломерного прибора (теодолита, тахеометра), вращающаяся вместе 
          со зрительной трубой и служащая для отсчета по лимбу горизонтального круга.
        </p>
      </div>

      {/* Термины на Б */}
      <h2 id="Б" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Б</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Базовая линия</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          В спутниковой геодезии — вектор между двумя пунктами, определяемый по 
          результатам совместной обработки GNSS-наблюдений. Длина и направление 
          базовой линии вычисляются с высокой точностью.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Балтийская система высот</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Система нормальных высот, принятая в России и странах СНГ. Нуль отсчета — 
          средний уровень Балтийского моря, зафиксированный Кронштадтским футштоком.
        </p>
      </div>

      {/* Термины на В */}
      <h2 id="В" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>В</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Высота геоида</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Отклонение геоида от референц-эллипсоида по нормали. Используется для 
          перехода от эллипсоидальных высот (получаемых по GNSS) к нормальным 
          высотам (используемым в строительстве).
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Вешение</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Процесс установки вех в створе линии для обеспечения видимости или 
          разбивки направления.
        </p>
      </div>

      {/* Термины на Г */}
      <h2 id="Г" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Г</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Геоид</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Эквипотенциальная поверхность гравитационного поля Земли, совпадающая 
          с невозмущенной поверхностью Мирового океана. Используется как 
          уровенная поверхность для отсчета высот.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Горизонт инструмента (ГИ)</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Высота визирной оси нивелира над уровенной поверхностью. Вычисляется 
          как сумма высоты точки стояния и отсчета по рейке. Используется для 
          определения высот промежуточных точек.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>ГГС (Государственная геодезическая сеть)</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Система закрепленных на местности пунктов, положение которых определено 
          в единой системе координат и высот. Служит исходной основой для 
          выполнения геодезических работ.
        </p>
      </div>

      {/* Термины на Д */}
      <h2 id="Д" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Д</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Дирекционный угол</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Угол между северным направлением осевого меридиана зоны проекции 
          Гаусса-Крюгера и направлением на точку. Измеряется по часовой стрелке 
          от 0° до 360°. Используется в плоских прямоугольных координатах.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Долгота</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Угол между плоскостью начального (Гринвичского) меридиана и плоскостью 
          меридиана данной точки. Измеряется в градусах от 0° до 180° к востоку 
          (восточная долгота) и западу (западная долгота).
        </p>
      </div>

      {/* Термины на Е */}
      <h2 id="Е" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Е</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Единая система координат</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Система координат, в которой ведутся все геодезические работы на 
          территории страны или региона. В России это СК-42, СК-95, ГСК-2011.
        </p>
      </div>

      {/* Термины на Ж */}
      <h2 id="Ж" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Ж</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Журнал геодезический</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Документ для записи результатов полевых измерений. В журнал заносятся 
          отсчеты по приборам, результаты измерений, абрисы и другая информация.
        </p>
      </div>

      {/* Термины на З */}
      <h2 id="З" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>З</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Зенитное расстояние</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Угол между направлением в зенит (вертикаль вверх) и направлением на 
          точку. Измеряется от 0° до 180°. Сумма зенитного расстояния и угла 
          наклона равна 90°.
        </p>
      </div>

      {/* Термины на И */}
      <h2 id="И" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>И</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Исполнительная съемка</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Геодезические работы, выполняемые после завершения строительства для 
          определения фактического положения построенных объектов. Результаты 
          оформляются в виде исполнительных чертежей и актов.
        </p>
      </div>

      {/* Термины на К */}
      <h2 id="К" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>К</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Крен</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Наклон сооружения от вертикали. Определяется по разности координат 
          (или высот) противоположных точек здания.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Красные отметки</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Проектные высоты точек (обычно в строительстве). Противопоставляются 
          "черным отметкам" — фактическим высотам местности.
        </p>
      </div>

      {/* Термины на Л */}
      <h2 id="Л" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Л</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Лимб</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Круговая шкала в угломерных приборах (теодолитах, тахеометрах), по 
          которой производится отсчет углов. Может быть горизонтальным и вертикальным.
        </p>
      </div>

      {/* Термины на М */}
      <h2 id="М" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>М</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Местная система координат (МСК)</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Система плоских прямоугольных координат, устанавливаемая для отдельного 
          региона или объекта строительства. Обычно имеет параметры перехода от 
          государственной системы координат.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Многопутность</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Эффект, возникающий при спутниковых измерениях, когда сигнал приходит 
          к антенне не только напрямую, но и отражаясь от окружающих предметов 
          (зданий, земли, воды). Приводит к снижению точности.
        </p>
      </div>

      {/* Термины на Н */}
      <h2 id="Н" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Н</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Невязка</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Разность между теоретическим значением суммы измеренных величин и 
          фактически полученной суммой. Невязка характеризует качество измерений 
          и распределяется при уравнивании.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Нивелир</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Геодезический прибор для определения превышений (разности высот) между 
          точками методом геометрического нивелирования.
        </p>
      </div>

      {/* Термины на О */}
      <h2 id="О" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>О</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Обратная геодезическая задача</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Вычисление дирекционного угла и расстояния между двумя точками по 
          известным координатам этих точек.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Осадка</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Вертикальное смещение (проседание) сооружения или грунта под нагрузкой.
        </p>
      </div>

      {/* Термины на П */}
      <h2 id="П" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>П</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Пикет</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Точка на местности, положение которой определяется в процессе съемки. 
          Пикеты разделяют на плановые, высотные и планово-высотные.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Прямая геодезическая задача</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Вычисление координат точки по известным координатам исходной точки, 
          дирекционному углу и расстоянию.
        </p>
      </div>

      {/* Термины на Р */}
      <h2 id="Р" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Р</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Репер</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Закрепленный на местности пункт нивелирной сети с известной высотой.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Румб</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Острый угол от ближайшего направления меридиана (север-юг) до данной 
          линии. Измеряется от 0° до 90° с указанием четверти (СВ, ЮВ, ЮЗ, СЗ).
        </p>
      </div>

      {/* Термины на С */}
      <h2 id="С" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>С</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>СКП (средняя квадратическая погрешность)</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Основная характеристика точности измерений. Вычисляется по формуле 
          Гаусса или Бесселя. Позволяет оценить случайную погрешность серии измерений.
        </p>
      </div>

      {/* Термины на Т */}
      <h2 id="Т" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Т</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Тахеометр</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Геодезический прибор для измерения расстояний, горизонтальных и 
          вертикальных углов. Современные электронные тахеометры автоматически 
          вычисляют координаты точек и могут работать в безотражательном режиме.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Теодолит</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Угломерный прибор для измерения горизонтальных и вертикальных углов. 
          Используется при создании опорных сетей и в разбивочных работах.
        </p>
      </div>

      {/* Термины на У */}
      <h2 id="У" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>У</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Уравнивание</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Математическая процедура распределения невязок и получения наиболее 
          надежных значений измеренных величин.
        </p>
      </div>

      {/* Термины на Ф */}
      <h2 id="Ф" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Ф</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Футшток</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Устройство для измерения уровня воды. Кронштадтский футшток — нуль 
          Балтийской системы высот.
        </p>
      </div>

      {/* Термины на Х */}
      <h2 id="Х" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Х</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Ход теодолитный</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Система ломаных линий, в которой измеряются углы поворота и длины сторон. 
          Служит для создания съемочного обоснования.
        </p>
      </div>

      {/* Термины на Ц */}
      <h2 id="Ц" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Ц</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Центрирование</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Установка геодезического прибора точно над точкой с заданными координатами.
        </p>
      </div>

      {/* Термины на Ч */}
      <h2 id="Ч" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Ч</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Черные отметки</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Фактические высоты точек местности (в отличие от "красных" — проектных).
        </p>
      </div>

      {/* Термины на Ш */}
      <h2 id="Ш" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Ш</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Широта</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Угол между плоскостью экватора и отвесной линией в данной точке. 
          Измеряется от 0° до 90° к северу (северная широта) и югу (южная широта).
        </p>
      </div>

      {/* Термины на Щ */}
      <h2 id="Щ" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Щ</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Щелемер</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Прибор для измерения ширины раскрытия трещин в конструкциях. Используется 
          при геодезическом мониторинге деформаций.
        </p>
      </div>

      {/* Термины на Э */}
      <h2 id="Э" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Э</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Эллипсоид Красовского</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Референц-эллипсоид, принятый в России для обработки геодезических 
          измерений. Параметры: большая полуось 6 378 245 м, сжатие 1:298.3.
        </p>
      </div>

      {/* Термины на Ю */}
      <h2 id="Ю" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Ю</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Юстировка</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Процесс регулировки геодезического прибора для восстановления правильных 
          геометрических соотношений между его осями.
        </p>
      </div>

      {/* Термины на Я */}
      <h2 id="Я" style={{ fontSize: '32px', color: '#2D5A27', marginTop: '40px' }}>Я</h2>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        margin: '16px 0',
        border: '1px solid rgba(167, 196, 160, 0.3)'
      }}>
        <h3 style={{ color: '#2D5A27', marginBottom: '8px' }}>Якорь (в геодезии)</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Специальное устройство для закрепления ходового конца мерной ленты или 
          рулетки при линейных измерениях.
        </p>
      </div>

      <div style={{
        background: '#F0F4EF',
        borderRadius: '16px',
        padding: '24px',
        margin: '40px 0 24px'
      }}>
        <p style={{ margin: 0, textAlign: 'center' }}>
          📖 Глоссарий будет пополняться новыми терминами. Если вы не нашли нужного 
          термина или хотите предложить дополнение — напишите нам в Telegram.
        </p>
      </div>
    </>
  );

  const relatedArticles = [
    {
      title: 'Сборник формул для геодезических расчетов',
      category: 'СПРАВОЧНИК',
      description: 'Основные формулы для решения прямых и обратных геодезических задач.',
      readTime: 15,
      link: '/knowledge/articles/formulas'
    },
    {
      title: 'Базовые принципы геодезии',
      category: 'ТЕОРИЯ И ОСНОВЫ',
      description: 'Форма Земли, геоид, эллипсоид, системы координат.',
      readTime: 8,
      link: '/knowledge/articles/basic-principles'
    },
    {
      title: 'ГОСТ 22268-76',
      category: 'СТАНДАРТЫ',
      description: 'Геодезия. Термины и определения',
      readTime: 5,
      link: '/standards/gost/gost-22268-76'
    }
  ];

  return (
    <Layout 
      title="Глоссарий геодезических терминов" 
      description="Основные понятия и определения в геодезии, топографии и картографии."
    >
      <Header />
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '16px 24px 0',
        width: '100%'
      }}>
        <Breadcrumbs 
          paths={[ 
            { name: 'Главная', link: '/' }, 
            { name: 'База знаний', link: '/knowledge' }, 
            { name: 'Справочник', link: '/knowledge/spravochnik' }, 
            { name: 'Глоссарий', isCurrent: true } 
          ]} 
          containerStyle={{ padding: 0, margin: 0 }} 
        />
      </div>
      <ArticlePage
        category="Справочник"
        title="Глоссарий геодезических терминов"
        author={{ 
          name: 'Редакция', 
          role: 'Геодезист.Онлайн'
        }}
        date="5 марта 2026"
        readTime={25}
        content={content}
        relatedArticles={relatedArticles}
      />
      <BackToTop />
    </Layout>
  );
}