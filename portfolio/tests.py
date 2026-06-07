from django.test import TestCase
from django.urls import reverse

from .resume import get_context


class HomePageTests(TestCase):
    def test_home_status_ok(self):
        response = self.client.get(reverse("portfolio:home"))
        self.assertEqual(response.status_code, 200)

    def test_home_uses_template(self):
        response = self.client.get(reverse("portfolio:home"))
        self.assertTemplateUsed(response, "portfolio/home.html")

    def test_home_renders_profile(self):
        response = self.client.get(reverse("portfolio:home"))
        self.assertContains(response, "Austin Akerley")
        self.assertContains(response, "Senior Software Engineer")

    def test_home_renders_experience_and_education(self):
        response = self.client.get(reverse("portfolio:home"))
        self.assertContains(response, "Microsoft")
        self.assertContains(response, "University of Washington")
        self.assertContains(response, "Texas A&amp;M University")


class ResumeDataTests(TestCase):
    def test_context_has_expected_sections(self):
        context = get_context()
        for key in ("profile", "stats", "experience", "education", "skills", "languages"):
            self.assertIn(key, context)

    def test_experience_entries_have_required_fields(self):
        for job in get_context()["experience"]:
            self.assertTrue(job["company"])
            self.assertTrue(job["role"])
            self.assertTrue(job["highlights"])
