let body = document.querySelector(".res");

$(".dwld-upd").on("click", () => {
  $(".res").html("");
  $sender = $(".selecterFio");
  const today = new Date().toLocaleDateString();
  const now = new Date().toLocaleTimeString().replace(/:/g, ".");
  const incNumber = `${aktNumber[0].value}-${checkedDB.length}`;

  let zoro = `<?xml version="1.0" encoding="windows-1251"?>
  <Файл ИдФайл="ON_NSCHFDOPPRMARK_2BM-7721546864-2012052808220682662630000000000_2LT-11001474008_20230325_a3049b64-888f-4c8e-ad67-2b2dfdba4a3f" ВерсФорм="5.01" ВерсПрог="EDOLite 1.0">
      <СвУчДокОбор ИдОтпр="2LT-11001474008" ИдПол="2BM-7721546864-2012052808220682662630000000000">
          <СвОЭДОтпр НаимОрг='ООО "Оператор-ЦРПТ"' ИННЮЛ="7731376812" ИдЭДО="2LT"/>
      </СвУчДокОбор>
      <Документ КНД="1115131" Функция="ДОП" ПоФактХЖ="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" НаимДокОпр="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" ДатаИнфПр="25.03.2023" ВремИнфПр="06.00.00" НаимЭконСубСост="ХОРКАШОВ ДАВЛАТЁР ФУЗАЙЛОВИЧ, ИНН: 667807515260">
          <СвСчФакт НомерСчФ="${incNumber}" ДатаСчФ="${today}" КодОКВ="643">
        <СвПрод>
                <ИдСв>
                    <СвИП ИННФЛ="667807515260">
                        <ФИО Фамилия="Хоркашов" Имя="Давлатёр" Отчество="Фузайлович"/>
                    </СвИП>
                </ИдСв>
                <Адрес>
                    <АдрРФ Индекс="620090" КодРегион="66" Город="Екатеринбург" Улица="Техническая" Дом="33" Кварт="21"/>
                </Адрес>
            </СвПрод>
            <ГрузОт>
                <ОнЖе>он же</ОнЖе>
            </ГрузОт>
            <СвПокуп>
                <ИдСв>
                <СвЮЛУч НаимОрг='ООО "Вайлдберриз"' ИННЮЛ="7721546864" КПП="507401001"/>
                </ИдСв>
                <Адрес>
                    <АдрРФ Индекс="142181" КодРегион="50" Город="Подольск" НаселПункт="Коледино" Улица="Индустриальный парк Коледино" Дом="6" Корпус="1"/>
                </Адрес>
            </СвПокуп>
            <ДопСвФХЖ1 ОбстФормСЧФ="4"/>
        </СвСчФакт>
        <ТаблСчФакт>
            <СведТов НомСтр="1" НаимТов="Товар" ОКЕИ_Тов="796" КолТов="${checkedDB.length}" ЦенаТов="0" СтТовБезНДС="0.00" НалСт="без НДС" СтТовУчНал="0.00">
                <Акциз>
                    <БезАкциз>без акциза</БезАкциз>
                </Акциз>
                <СумНал>
                    <БезНДС>без НДС</БезНДС>
                </СумНал>
                <ДопСведТов НаимЕдИзм="шт">
                    <НомСредИдентТов>`;

  let zoro2 = `</НомСредИдентТов>
                </ДопСведТов>
            </СведТов>
            <ВсегоОпл СтТовБезНДСВсего="0.00" СтТовУчНалВсего="0.00">
                <СумНалВсего>
                    <СумНал>0.00</СумНал>
                </СумНалВсего>
            </ВсегоОпл>
        </ТаблСчФакт>
        <СвПродПер>
            <СвПер СодОпер="Товары переданы">
                <ОснПер НаимОсн="Акт приемки товара" НомОсн="${aktNumber[0].value}" ДатаОсн="${aktData[0].value}"/>
            </СвПер>
        </СвПродПер>
        <Подписант ОблПолн="0" Статус="1" ОснПолн="Должностные обязанности">
            <ИП ИННФЛ="667807515260" СвГосРегИП="322665800201420">
                <ФИО Фамилия="ХОРКАШОВ" Имя="ДАВЛАТЁР" Отчество="ФУЗАЙЛОВИЧ"/>
            </ИП>
        </Подписант>
    </Документ>
</Файл>`;

  let said = `<?xml version="1.0" encoding="windows-1251"?>
  <Файл ИдФайл="ON_NSCHFDOPPRMARK_2BM-7721546864-2012052808220682662630000000000_2LT-11001490913_20230401_2c2f9d94-103b-4d06-9810-679420cede4b" ВерсФорм="5.01" ВерсПрог="EDOLite 1.0">
<СвУчДокОбор ИдОтпр="2LT-11001490913" ИдПол="2BM-7721546864-2012052808220682662630000000000">
    <СвОЭДОтпр НаимОрг='ООО "Оператор-ЦРПТ"' ИННЮЛ="7731376812" ИдЭДО="2LT"/>
</СвУчДокОбор>
<Документ КНД="1115131" Функция="ДОП" ПоФактХЖ="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" НаимДокОпр="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" ДатаИнфПр="${today}" ВремИнфПр="${now}" НаимЭконСубСост="НАЖАТОВ БАХТИЁР ТОИРШОЕВИЧ, ИНН: 667808058520">
    <СвСчФакт НомерСчФ="${incNumber}" ДатаСчФ="${today}" КодОКВ="643">
        <СвПрод>
            <ИдСв>
                <СвИП ИННФЛ="667808058520">
                    <ФИО Фамилия="нажатов" Имя="бахтиёр" Отчество="тоиршоевич"/>
                </СвИП>
            </ИдСв>
            <Адрес>
                <АдрРФ Индекс="620134" КодРегион="66" Город="Екатеринбург" Улица="Коммунальная" Дом="32" Кварт="12"/>
            </Адрес>
        </СвПрод>
        <ГрузОт>
            <ОнЖе>он же</ОнЖе>
        </ГрузОт>
        <СвПокуп>
            <ИдСв>
              <СвЮЛУч НаимОрг='ООО "Вайлдберриз"' ИННЮЛ="7721546864" КПП="507401001"/>
            </ИдСв>
            <Адрес>
                <АдрРФ Индекс="142181" КодРегион="50" Город="Подольск" НаселПункт="Коледино" Улица="Индустриальный парк Коледино" Дом="6" Корпус="1"/>
            </Адрес>
        </СвПокуп>
        <ДопСвФХЖ1 ОбстФормСЧФ="4"/>
    </СвСчФакт>
    <ТаблСчФакт>
        <СведТов НомСтр="1" НаимТов="Товар" ОКЕИ_Тов="796" КолТов="${checkedDB.length}" НалСт="без НДС" ДефСтТовУчНал="-">
            <Акциз>
                <БезАкциз>без акциза</БезАкциз>
            </Акциз>
            <СумНал>
                <БезНДС>без НДС</БезНДС>
            </СумНал>
            <ДопСведТов НаимЕдИзм="шт">
                <НомСредИдентТов>`;

  let said2 = `
  </НомСредИдентТов>
                </ДопСведТов>
            </СведТов>
            <ВсегоОпл СтТовБезНДСВсего="0.00" СтТовУчНалВсего="0.00">
                <СумНалВсего>
                    <СумНал>0.00</СумНал>
                </СумНалВсего>
            </ВсегоОпл>
        </ТаблСчФакт>
        <СвПродПер>
            <СвПер СодОпер="Товары переданы">
                <ОснПер НаимОсн="Акт приемки товара" НомОсн="${aktNumber[0].value}" ДатаОсн="${aktData[0].value}"/>
            </СвПер>
        </СвПродПер>
        <Подписант ОблПолн="0" Статус="1" ОснПолн="Должностные обязанности">
            <ИП ИННФЛ="667808058520" СвГосРегИП="322665800215504">
                <ФИО Фамилия="НАЖАТОВ" Имя="БАХТИЁР" Отчество="ТОИРШОЕВИЧ"/>
            </ИП>
        </Подписант>
    </Документ>
</Файл>`;

  let asror = `<?xml version="1.0" encoding="windows-1251"?>
  <Файл ИдФайл="ON_NSCHFDOPPRMARK_2BM-7721546864-2012052808220682662630000000000_2LT-11001490913_20230401_2c2f9d94-103b-4d06-9810-679420cede4b" ВерсФорм="5.01" ВерсПрог="EDOLite 1.0">
<СвУчДокОбор ИдОтпр="2LT-11001490913" ИдПол="2BM-7721546864-2012052808220682662630000000000">
    <СвОЭДОтпр НаимОрг='ООО "Оператор-ЦРПТ"' ИННЮЛ="7731376812" ИдЭДО="2LT"/>
</СвУчДокОбор>
<Документ КНД="1115131" Функция="ДОП" ПоФактХЖ="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" НаимДокОпр="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" ДатаИнфПр="${today}" ВремИнфПр="${now}" НаимЭконСубСост="НАЖАТОВ БАХТИЁР ТОИРШОЕВИЧ, ИНН: 667808058520">
    <СвСчФакт НомерСчФ="${incNumber}" ДатаСчФ="${today}" КодОКВ="643">
        <СвПрод>
            <ИдСв>
                <СвИП ИННФЛ="667808058520">
                    <ФИО Фамилия="нажатов" Имя="бахтиёр" Отчество="тоиршоевич"/>
                </СвИП>
            </ИдСв>
            <Адрес>
                <АдрРФ Индекс="620134" КодРегион="66" Город="Екатеринбург" Улица="Коммунальная" Дом="32" Кварт="12"/>
            </Адрес>
        </СвПрод>
        <ГрузОт>
            <ОнЖе>он же</ОнЖе>
        </ГрузОт>
        <СвПокуп>
            <ИдСв>
              <СвЮЛУч НаимОрг='ООО "Вайлдберриз"' ИННЮЛ="7721546864" КПП="507401001"/>
            </ИдСв>
            <Адрес>
                <АдрРФ Индекс="142181" КодРегион="50" Город="Подольск" НаселПункт="Коледино" Улица="Индустриальный парк Коледино" Дом="6" Корпус="1"/>
            </Адрес>
        </СвПокуп>
        <ДопСвФХЖ1 ОбстФормСЧФ="4"/>
    </СвСчФакт>
    <ТаблСчФакт>
        <СведТов НомСтр="1" НаимТов="Товар" ОКЕИ_Тов="796" КолТов="${checkedDB.length}" НалСт="без НДС" ДефСтТовУчНал="-">
            <Акциз>
                <БезАкциз>без акциза</БезАкциз>
            </Акциз>
            <СумНал>
                <БезНДС>без НДС</БезНДС>
            </СумНал>
            <ДопСведТов НаимЕдИзм="шт">
                <НомСредИдентТов>`;

  let asror2 = `
  </НомСредИдентТов>
                </ДопСведТов>
            </СведТов>
            <ВсегоОпл СтТовБезНДСВсего="0.00" СтТовУчНалВсего="0.00">
                <СумНалВсего>
                    <СумНал>0.00</СумНал>
                </СумНалВсего>
            </ВсегоОпл>
        </ТаблСчФакт>
        <СвПродПер>
            <СвПер СодОпер="Товары переданы">
                <ОснПер НаимОсн="Акт приемки товара" НомОсн="${aktNumber[0].value}" ДатаОсн="${aktData[0].value}"/>
            </СвПер>
        </СвПродПер>
        <Подписант ОблПолн="0" Статус="1" ОснПолн="Должностные обязанности">
            <ИП ИННФЛ="667808058520" СвГосРегИП="322665800215504">
                <ФИО Фамилия="НАЖАТОВ" Имя="БАХТИЁР" Отчество="ТОИРШОЕВИЧ"/>
            </ИП>
        </Подписант>
    </Документ>
</Файл>`;

  let mukha = `<?xml version="1.0" encoding="windows-1251"?>
<Файл ИдФайл="ON_NSCHFDOPPRMARK_2BM-7721546864-2012052808220682662630000000000_2LT-11001490913_20230401_2c2f9d94-103b-4d06-9810-679420cede4b" ВерсФорм="5.01" ВерсПрог="EDOLite 1.0">
<СвУчДокОбор ИдОтпр="2LT-11001490913" ИдПол="2BM-7721546864-2012052808220682662630000000000">
  <СвОЭДОтпр НаимОрг='ООО "Оператор-ЦРПТ"' ИННЮЛ="7731376812" ИдЭДО="2LT"/>
</СвУчДокОбор>
<Документ КНД="1115131" Функция="ДОП" ПоФактХЖ="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" НаимДокОпр="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" ДатаИнфПр="${today}" ВремИнфПр="${now}" НаимЭконСубСост="НАЖАТОВ БАХТИЁР ТОИРШОЕВИЧ, ИНН: 667808058520">
  <СвСчФакт НомерСчФ="${incNumber}" ДатаСчФ="${today}" КодОКВ="643">
      <СвПрод>
          <ИдСв>
              <СвИП ИННФЛ="667808058520">
                  <ФИО Фамилия="нажатов" Имя="бахтиёр" Отчество="тоиршоевич"/>
              </СвИП>
          </ИдСв>
          <Адрес>
              <АдрРФ Индекс="620134" КодРегион="66" Город="Екатеринбург" Улица="Коммунальная" Дом="32" Кварт="12"/>
          </Адрес>
      </СвПрод>
      <ГрузОт>
          <ОнЖе>он же</ОнЖе>
      </ГрузОт>
      <СвПокуп>
          <ИдСв>
            <СвЮЛУч НаимОрг='ООО "Вайлдберриз"' ИННЮЛ="7721546864" КПП="507401001"/>
          </ИдСв>
          <Адрес>
              <АдрРФ Индекс="142181" КодРегион="50" Город="Подольск" НаселПункт="Коледино" Улица="Индустриальный парк Коледино" Дом="6" Корпус="1"/>
          </Адрес>
      </СвПокуп>
      <ДопСвФХЖ1 ОбстФормСЧФ="4"/>
  </СвСчФакт>
  <ТаблСчФакт>
      <СведТов НомСтр="1" НаимТов="Товар" ОКЕИ_Тов="796" КолТов="${checkedDB.length}" НалСт="без НДС" ДефСтТовУчНал="-">
          <Акциз>
              <БезАкциз>без акциза</БезАкциз>
          </Акциз>
          <СумНал>
              <БезНДС>без НДС</БезНДС>
          </СумНал>
          <ДопСведТов НаимЕдИзм="шт">
              <НомСредИдентТов>`;

  let mukha2 = `
</НомСредИдентТов>
              </ДопСведТов>
          </СведТов>
          <ВсегоОпл СтТовБезНДСВсего="0.00" СтТовУчНалВсего="0.00">
              <СумНалВсего>
                  <СумНал>0.00</СумНал>
              </СумНалВсего>
          </ВсегоОпл>
      </ТаблСчФакт>
      <СвПродПер>
          <СвПер СодОпер="Товары переданы">
              <ОснПер НаимОсн="Акт приемки товара" НомОсн="${aktNumber[0].value}" ДатаОсн="${aktData[0].value}"/>
          </СвПер>
      </СвПродПер>
      <Подписант ОблПолн="0" Статус="1" ОснПолн="Должностные обязанности">
          <ИП ИННФЛ="667808058520" СвГосРегИП="322665800215504">
              <ФИО Фамилия="НАЖАТОВ" Имя="БАХТИЁР" Отчество="ТОИРШОЕВИЧ"/>
          </ИП>
      </Подписант>
  </Документ>
</Файл>`;

  let baxa = `<?xml version="1.0" encoding="windows-1251"?>
<Файл ИдФайл="ON_NSCHFDOPPRMARK_2BM-7721546864-2012052808220682662630000000000_2LT-11001490913_20230401_2c2f9d94-103b-4d06-9810-679420cede4b" ВерсФорм="5.01" ВерсПрог="EDOLite 1.0">
<СвУчДокОбор ИдОтпр="2LT-11001490913" ИдПол="2BM-7721546864-2012052808220682662630000000000">
  <СвОЭДОтпр НаимОрг='ООО "Оператор-ЦРПТ"' ИННЮЛ="7731376812" ИдЭДО="2LT"/>
</СвУчДокОбор>
<Документ КНД="1115131" Функция="ДОП" ПоФактХЖ="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" НаимДокОпр="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" ДатаИнфПр="${today}" ВремИнфПр="${now}" НаимЭконСубСост="НАЖАТОВ БАХТИЁР ТОИРШОЕВИЧ, ИНН: 667808058520">
  <СвСчФакт НомерСчФ="${incNumber}" ДатаСчФ="${today}" КодОКВ="643">
      <СвПрод>
          <ИдСв>
              <СвИП ИННФЛ="667808058520">
                  <ФИО Фамилия="нажатов" Имя="бахтиёр" Отчество="тоиршоевич"/>
              </СвИП>
          </ИдСв>
          <Адрес>
              <АдрРФ Индекс="620134" КодРегион="66" Город="Екатеринбург" Улица="Коммунальная" Дом="32" Кварт="12"/>
          </Адрес>
      </СвПрод>
      <ГрузОт>
          <ОнЖе>он же</ОнЖе>
      </ГрузОт>
      <СвПокуп>
          <ИдСв>
            <СвЮЛУч НаимОрг='ООО "Вайлдберриз"' ИННЮЛ="7721546864" КПП="507401001"/>
          </ИдСв>
          <Адрес>
              <АдрРФ Индекс="142181" КодРегион="50" Город="Подольск" НаселПункт="Коледино" Улица="Индустриальный парк Коледино" Дом="6" Корпус="1"/>
          </Адрес>
      </СвПокуп>
      <ДопСвФХЖ1 ОбстФормСЧФ="4"/>
  </СвСчФакт>
  <ТаблСчФакт>
      <СведТов НомСтр="1" НаимТов="Товар" ОКЕИ_Тов="796" КолТов="${checkedDB.length}" НалСт="без НДС" ДефСтТовУчНал="-">
          <Акциз>
              <БезАкциз>без акциза</БезАкциз>
          </Акциз>
          <СумНал>
              <БезНДС>без НДС</БезНДС>
          </СумНал>
          <ДопСведТов НаимЕдИзм="шт">
              <НомСредИдентТов>`;

  let baxa2 = `
</НомСредИдентТов>
              </ДопСведТов>
          </СведТов>
          <ВсегоОпл СтТовБезНДСВсего="0.00" СтТовУчНалВсего="0.00">
              <СумНалВсего>
                  <СумНал>0.00</СумНал>
              </СумНалВсего>
          </ВсегоОпл>
      </ТаблСчФакт>
      <СвПродПер>
          <СвПер СодОпер="Товары переданы">
              <ОснПер НаимОсн="Акт приемки товара" НомОсн="${aktNumber[0].value}" ДатаОсн="${aktData[0].value}"/>
          </СвПер>
      </СвПродПер>
      <Подписант ОблПолн="0" Статус="1" ОснПолн="Должностные обязанности">
          <ИП ИННФЛ="667808058520" СвГосРегИП="322665800215504">
              <ФИО Фамилия="НАЖАТОВ" Имя="БАХТИЁР" Отчество="ТОИРШОЕВИЧ"/>
          </ИП>
      </Подписант>
  </Документ>
</Файл>`;

  let shaxa = `<?xml version="1.0" encoding="windows-1251"?>
<Файл ИдФайл="ON_NSCHFDOPPRMARK_2LT-11001559538_2LT-11001522352_20230418_fdf27ff1-ba7d-4664-b568-41a8dcb6aaff" ВерсФорм="5.01" ВерсПрог="EDOLite 1.0">
    <СвУчДокОбор ИдОтпр="2LT-11001522352" ИдПол="2LT-11001559538">
    <СвОЭДОтпр НаимОрг='ООО "Оператор-ЦРПТ"' ИННЮЛ="7731376812" ИдЭДО="2LT"/>
    </СвУчДокОбор>
    <Документ КНД="1115131" Функция="ДОП" ПоФактХЖ="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" НаимДокОпр="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" ДатаИнфПр="18.04.2023" ВремИнфПр="22.57.28" НаимЭконСубСост="САЙМУМИНЗОДА ШАХРОМ КИРОМУДДИНОВИЧ, ИНН: 667907925608">
        <СвСчФакт НомерСчФ="${incNumber}" ДатаСчФ="${today}" КодОКВ="643">
      <СвПрод>
                <ИдСв>
                    <СвИП ИННФЛ="667907925608">
                        <ФИО Фамилия="САЙМУМИНЗОДА " Имя="ШАХРОМ " Отчество="КИРОМУДДИНОВИЧ"/>
                    </СвИП>
                </ИдСв>
                <Адрес>
                    <АдрРФ Индекс="620141" КодРегион="66" Город="Екатеринбург" Улица="Ольховская" Дом="25" Корпус="2" Кварт="28"/>
                </Адрес>
            </СвПрод>
            <ГрузОт>
                <ОнЖе>он же</ОнЖе>
            </ГрузОт>
      <СвПокуп>
          <ИдСв>
            <СвЮЛУч НаимОрг='ООО "Вайлдберриз"' ИННЮЛ="7721546864" КПП="507401001"/>
          </ИдСв>
          <Адрес>
              <АдрРФ Индекс="142181" КодРегион="50" Город="Подольск" НаселПункт="Коледино" Улица="Индустриальный парк Коледино" Дом="6" Корпус="1"/>
          </Адрес>
      </СвПокуп>
      <ДопСвФХЖ1 ОбстФормСЧФ="4"/>
  </СвСчФакт>
  <ТаблСчФакт>
      <СведТов НомСтр="1" НаимТов="Товар" ОКЕИ_Тов="796" КолТов="${checkedDB.length}" НалСт="без НДС" ДефСтТовУчНал="-">
          <Акциз>
              <БезАкциз>без акциза</БезАкциз>
          </Акциз>
          <СумНал>
              <БезНДС>без НДС</БезНДС>
          </СумНал>
          <ДопСведТов НаимЕдИзм="шт">
                    <НомСредИдентТов>`;

  let shaxa2 = `
                    </НомСредИдентТов>
                </ДопСведТов>
            </СведТов>
            <ВсегоОпл СтТовБезНДСВсего="0.00" СтТовУчНалВсего="0.00">
                <СумНалВсего>
                    <СумНал>0.00</СумНал>
                </СумНалВсего>
            </ВсегоОпл>
        </ТаблСчФакт>
        <СвПродПер>
            <СвПер СодОпер="Товары переданы">
                <ОснПер НаимОсн="Акт приемки товара" НомОсн="${aktNumber[0].value}" ДатаОсн="${aktData[0].value}"/>
            </СвПер>
        </СвПродПер>
        <Подписант ОблПолн="0" Статус="1" ОснПолн="Должностные обязанности">
            <ИП ИННФЛ="667907925608" СвГосРегИП="322665800208692">
                <ФИО Фамилия="САЙМУМИНЗОДА" Имя="ШАХРОМ" Отчество="КИРОМУДДИНОВИЧ"/>
            </ИП>
        </Подписант>
    </Документ>
</Файл>`;

  let gayrat = `<?xml version="1.0" encoding="windows-1251"?>
<Файл ИдФайл="ON_NSCHFDOPPRMARK_2BM-7721546864-2012052808220682662630000000000_2LT-11001490913_20230401_2c2f9d94-103b-4d06-9810-679420cede4b" ВерсФорм="5.01" ВерсПрог="EDOLite 1.0">
<СвУчДокОбор ИдОтпр="2LT-11001490913" ИдПол="2BM-7721546864-2012052808220682662630000000000">
  <СвОЭДОтпр НаимОрг='ООО "Оператор-ЦРПТ"' ИННЮЛ="7731376812" ИдЭДО="2LT"/>
</СвУчДокОбор>
<Документ КНД="1115131" Функция="ДОП" ПоФактХЖ="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" НаимДокОпр="Документ об отгрузке товаров (выполнении работ), передаче имущественных прав (документ об оказании услуг)" ДатаИнфПр="${today}" ВремИнфПр="${now}" НаимЭконСубСост="НАЖАТОВ БАХТИЁР ТОИРШОЕВИЧ, ИНН: 667808058520">
  <СвСчФакт НомерСчФ="${incNumber}" ДатаСчФ="${today}" КодОКВ="643">
      <СвПрод>
          <ИдСв>
              <СвИП ИННФЛ="667808058520">
                  <ФИО Фамилия="нажатов" Имя="бахтиёр" Отчество="тоиршоевич"/>
              </СвИП>
          </ИдСв>
          <Адрес>
              <АдрРФ Индекс="620134" КодРегион="66" Город="Екатеринбург" Улица="Коммунальная" Дом="32" Кварт="12"/>
          </Адрес>
      </СвПрод>
      <ГрузОт>
          <ОнЖе>он же</ОнЖе>
      </ГрузОт>
      <СвПокуп>
          <ИдСв>
            <СвЮЛУч НаимОрг='ООО "Вайлдберриз"' ИННЮЛ="7721546864" КПП="507401001"/>
          </ИдСв>
          <Адрес>
              <АдрРФ Индекс="142181" КодРегион="50" Город="Подольск" НаселПункт="Коледино" Улица="Индустриальный парк Коледино" Дом="6" Корпус="1"/>
          </Адрес>
      </СвПокуп>
      <ДопСвФХЖ1 ОбстФормСЧФ="4"/>
  </СвСчФакт>
  <ТаблСчФакт>
      <СведТов НомСтр="1" НаимТов="Товар" ОКЕИ_Тов="796" КолТов="${checkedDB.length}" НалСт="без НДС" ДефСтТовУчНал="-">
          <Акциз>
              <БезАкциз>без акциза</БезАкциз>
          </Акциз>
          <СумНал>
              <БезНДС>без НДС</БезНДС>
          </СумНал>
          <ДопСведТов НаимЕдИзм="шт">
              <НомСредИдентТов>`;

  let gayrat2 = `
</НомСредИдентТов>
              </ДопСведТов>
          </СведТов>
          <ВсегоОпл СтТовБезНДСВсего="0.00" СтТовУчНалВсего="0.00">
              <СумНалВсего>
                  <СумНал>0.00</СумНал>
              </СумНалВсего>
          </ВсегоОпл>
      </ТаблСчФакт>
      <СвПродПер>
          <СвПер СодОпер="Товары переданы">
              <ОснПер НаимОсн="Акт приемки товара" НомОсн="${aktNumber[0].value}" ДатаОсн="${aktData[0].value}"/>
          </СвПер>
      </СвПродПер>
      <Подписант ОблПолн="0" Статус="1" ОснПолн="Должностные обязанности">
          <ИП ИННФЛ="667808058520" СвГосРегИП="322665800215504">
              <ФИО Фамилия="НАЖАТОВ" Имя="БАХТИЁР" Отчество="ТОИРШОЕВИЧ"/>
          </ИП>
      </Подписант>
  </Документ>
</Файл>`;

  switch ($sender.val()) {
    case "Zoro":
      body.innerHTML += zoro;
      for (let elem of checkedDB) {
        body.innerHTML += `
                    <КИЗ><![CDATA[${elem}]]></КИЗ>`;
      }
      body.innerHTML += zoro2;
      break;
    case "Said":
      alert($sender.val());
      break;
    case "Asror":
      alert($sender.val());
      break;
    case "Mukha":
      alert($sender.val());
      break;
    case "Abubakr":
      body.innerHTML += baxa;
      for (let elem of checkedDB) {
        body.innerHTML += `
                    <КИЗ><![CDATA[${elem}]]></КИЗ>`;
      }
      body.innerHTML += baxa2;
      break;
    case "Shaxa":
      body.innerHTML += shaxa;
      for (let elem of checkedDB) {
        body.innerHTML += `
                    <КИЗ><![CDATA[${elem}]]></КИЗ>`;
      }
      body.innerHTML += shaxa2;
      break;
    case "Gayratsho":
      alert($sender.val());
      break;
    default:
      alert("Выберите отправителя");
  }
});

// Copy result to buffer
var isIe =
  navigator.userAgent.toLowerCase().indexOf("msie") != -1 ||
  navigator.userAgent.toLowerCase().indexOf("trident") != -1;

function copyClip() {
  navigator.clipboard.writeText(body.value).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.info("Async: Could not copy text: ", err);
    }
  );
}
