module Jekyll
  module DateFilterSpanish
    MONTHS = {
      '01' => 'enero',
      '02' => 'febrero',
      '03' => 'marzo',
      '04' => 'abril',
      '05' => 'mayo',
      '06' => 'junio',
      '07' => 'julio',
      '08' => 'agosto',
      '09' => 'septiembre',
      '10' => 'octubre',
      '11' => 'noviembre',
      '12' => 'diciembre'
    }

    def date_spanish(input)
      day, month, year = input.split('/')
      "#{day.to_i} de #{MONTHS[month]} de #{year}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilterSpanish)