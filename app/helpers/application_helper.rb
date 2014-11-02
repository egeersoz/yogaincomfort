module ApplicationHelper

  def full_title(page_title)
    base_title = "Yoga in Comfort"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  # Used to style flash messages based on their type
  #
  def flash_class(level)
    case level
      when :notice then "alert alert-info"
      when :success then "alert alert-success"
      when :error then "alert alert-danger"
      when :alert then "alert alert-danger"
    end
  end

  # Used to determine if an element on the page should have active styling.
  #
  def is_active?(action)
    if current_page?(action: action)
      "active"
    else
      ""
    end
  end

end
