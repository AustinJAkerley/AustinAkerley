from django.shortcuts import render

from .resume import get_context


def home(request):
    """Render the single-page portfolio using the structured resume data."""
    return render(request, "portfolio/home.html", get_context())
